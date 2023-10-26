const express = require("express");
const {
  Property,
  Feature,
  PropertyFeature,
  propertyEmployee,
  sequelize,
  Employee,
} = require("../models/");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

// crud endpoints of Property Table

// create Property

const createProperty = async (req, res, next) => {
  // apply transaction
  // start transaction from connection and store it to the variable
  const t = await sequelize.transaction();

  try {
    // 1) Destructure the relevent infrmation from the body

    const {
      address1,
      address2,
      city,
      areaInSquareFeet,
      numBathrooms,
      numBedrooms,
      numCarspaces,
      contact,
      price,
      description,
      propertyTypeId,
      listingTypeId,
      featuresIds,
      employeeIds,
      roletypeIds,
    } = req.body;

    //   2)create a new property record in database using relevent information
    // 2) Create a new property record in the database using relevant information
    const property = await Property.create(
      {
        address1,
        address2,
        city,
        areaInSquareFeet,
        numBathrooms,
        numBedrooms,
        numCarspaces,
        contact,
        price,
        description,
        propertyTypeId,
        listingTypeId,
      },
      { transaction: t }
    );
    if (!property) {
      await t.rollback();
      return next(
        new AppError("There is an error while creating the property", 500)
      ); //internel server error
    }

    // add Features to Property
    // const ids = featuresIds.split(",");
    const propertyFeatureArr = [];
    featuresIds.forEach(async (featureId) => {
      propertyFeatureArr.push({
        propertyId: property.id,
        featureId: featureId,
      });
    });

    await PropertyFeature.bulkCreate(propertyFeatureArr, { transaction: t });

    // assign emplyee to trhe property
    await propertyEmployee.create(
      {
        propertyId: property.id,
        employeeId: employeeIds,
        roleTypeId: roletypeIds,
        startDate: new Date("2023-10-23"),
        endDate: new Date("2023-10-27"),
      },
      { transaction: t }
    );

    // if the execution reaches at the line then no error is thrown
    // we commit the transaction
    await t.commit();

    //   3) display the success reponse to the user
    res.status(201).json({
      status: "Success",
      message: "proeprty record is created succesfully",
      property,
    });
  } catch (error) {
    await t.rollback(); //if the error display then rollback the transaction

    res.status(500).json({
      message: error.message,
    });
  }
};

// read All the property records

const readAllProperty = catchAsync(async (req, res, next) => {
  // 1) retrive all the property records fron the database
  const properties = await Property.findAll({});

  //   2) check if no property is are found in database
  if (!properties) {
    return next(new AppError("There is no property record", 404));
  }

  // 3)  display the success response to the user
  res.status(200).json({
    message: "ALL property records",
    length: properties.length,
    Property: {
      properties, //include all the properties records
    },
  });
});

// read a specific property
const readOneProperty = catchAsync(async (req, res, next) => {
  // 1) retrive all the property records fron the database
  const properties = await Property.findOne({ where: { id: req.params.id } });

  //   2) check if no property is are found in database
  if (!properties) {
    return next(new AppError("There is no property record", 404));
  }

  // 3)  display the success response to the user
  res.status(200).json({
    message: "property record",
    Property: {
      properties,
    },
  });
});

// update the property
const updateProperty = catchAsync(async (req, res, next) => {
  // 1) extract the property id from the request parameter
  const propertyId = req.params.id;

  //   2) Find the Property by its Id in the database
  const property = await Property.findOne({ where: { id: propertyId } });

  //   3) check if the property with given id exist
  if (!property) {
    return next(
      new AppError("There is no property record you want to update", 404)
    );
  }

  //  4) destructure the given property to be updated
  const {
    address1,
    address2,
    city,
    areaInSquareFeet,
    numBathrooms,
    numBedrooms,
    numCarspaces,
    contact,
    price,
    description,
    propertyTypeId,
    listingTypeId,
  } = req.body;

  // 5) update the fields that want to be update
  (property.address1 = address1),
    (property.address2 = address2),
    (property.city = city);
  property.areaInSquareFeet = areaInSquareFeet;
  (property.numBathrooms = numBathrooms),
    (property.numBedrooms = numBedrooms),
    (property.numCarspaces = numCarspaces),
    (property.contact = contact);
  property.price = price;
  (property.description = description),
    (property.propertyTypeId = propertyTypeId);
  property.listingTypeId = listingTypeId;

  // 6) update the property back to the database
  await property.save();

  // 7) first delete  for the property
  const employee = await propertyEmployee.destroy({
    where: {
      propertyId: property.id,
    },
  });
  // send the success resposne
  res.status(200).json({
    status: "success",
    message: "Property record update succesfully",
    Property: {
      property,
    },
  });
});

// delete proepty API
const deleteProperty = catchAsync(async (req, res, next) => {
  //1) Extract the Property ID from the request body
  const propertyId = req.params.id;

  // 2) FInd the Property by its from database
  const property = await Property.findOne({ where: { id: propertyId } });

  // 3) check if the property with the given id exists
  if (!property) {
    return next(new AppError("There is no Record of that Property", 404));
  }

  // 4) now delete the Property
  await property.destroy();

  // now display the response to the user
  res.status(200).json({
    status: "success",
    message: "Property record is deleted succesfully",
  });
});

// upload images
const uploadImage = catchAsync(async (req, res, next) => {
  // set upload images address in databse
  const proeprtyId = req.params.id;
  const property = await Property.findOne({ where: { id: proeprtyId } });
  if (!property) {
    return next(new AppError("There is no property of this id", 404));
  }
  const filePath = req.files.map((file) => file.path);
  const path = filePath.join(",");
  property.propertyImages = path;
  await property.save();
  res.status(201).json({
    message: "Property Images uploaded ",
  });
});

// Retrive a list of eployess associated with property
const allEmployeeAssociateProperty = catchAsync(async (req, res, next) => {
  const employees = await Property.findAll({
    where: { id: req.params.id },
    include: Employee,
  });
  res.status(200).json({
    message: "ALL the employees associated with property",
    status: "success",
    data: { employees },
  });
});

// remove an employee from the property
// const deleteEmployeeProperty = catchAsync(async (req, res, next) => {
//   const { employeeId } = req.body;
//   const employee = await Property.findAll({
//     where: { id: req.params.id },
//     include: Employee,
//     where: { id: req.params.id },
//   });

//   res.status(200).json({
//     employee,
//   });
// });

const deleteEmployeeProperty = catchAsync(async (req, res, next) => {
  const { employeeId } = req.body;

  const employee = await propertyEmployee.findOne({
    where: { propertyId: req.params.id, employeeId: employeeId },
  });
  if (!employee) {
    return next(new AppError("There is no property with that id", 404));
  }
  await employee.destroy();

  res.status(200).json({
    status: "success",
    data: null,
  });
});

// update propertyEmployee
const updatePropertyEmployeeRole = catchAsync(async (req, res, next) => {
  const propertyID = req.params.id;
  const { roleTypeId } = req.body;
  const propertyemployee = await propertyEmployee.findOne({
    where: { propertyId: req.params.id },
  });
  propertyemployee.roleTypeId = roleTypeId;
  await propertyemployee.save();
  return res.status(201).json({
    status: "success",
    message: "propertyEMployee is updated succesfully",
  });
});

module.exports = {
  createProperty,
  readAllProperty,
  readOneProperty,
  updateProperty,
  deleteProperty,
  uploadImage,
  allEmployeeAssociateProperty,
  deleteEmployeeProperty,
  updatePropertyEmployeeRole,
};
