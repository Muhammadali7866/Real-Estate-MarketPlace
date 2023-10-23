const { PropertyType } = require("../models/");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// crud api endpoints for property TYpe

// read all Property Type
// const readAllPropertyType = catchAsync(async (req, res, next) => {
//   // query database to fetch all the property Type record
//   const propertyType = await propertyType.findAll({});
//   if (!propertyType) {
//     return next(new AppError("There is no poperty Type ", 404));
//   }
//   res.status(200).json({
//     status: "Success",
//     message: "All the propertyType records ",
//     propertyTypes: {
//       propertyType,
//     },
//   });
// });

// const readOnePropertyType = catchAsync(async (req, res, next) => {
//   const propertyId = req.params.id;
//   const propertyTypes = await PropertyType.findOne({
//     where: { id: propertyId },
//   });
//   if (!propertyId) {
//     return next(new AppError("There is No propertyType", 404));
//   }
//   res.status(200).json({
//     message: "PropertyType Record ",
//     propertyType: {
//       propertyTypes,
//     },
//   });
// });

// create Property TYPE
const createPropertyType = catchAsync(async (req, res, next) => {
  // 1)destructure the relevent information from the body
  const { description } = req.body;

  // create the property Type record
  const propertyType = await PropertyType.create({ description });

  // display success response to the user
  res.status(201).json({
    message: "PropertyType record is created succesfully ",
    propertyType,
  });
});

const updatePropertyType = catchAsync(async (req, res, next) => {
  const PropertyId = req.params.id;
  const { description } = req.body;
  const propertyType = await PropertyType.findOne({
    where: { id: PropertyId },
  });
  if (!propertyType) {
    return next(new AppError("There is no PropertyType", 404));
  }
  propertyType.description = description;
  await propertyType.save();
  res.status(201).json({
    message: "PropertyType is updated succesfully",
    propertyType,
  });
});
const readOnePropertyType = factory.getOne(PropertyType);
const readAllPropertyType = factory.getAll(PropertyType);
const deletePropertyType = factory.deleteOne(PropertyType);

module.exports = {
  createPropertyType,
  readAllPropertyType,
  readOnePropertyType,
  updatePropertyType,
  deletePropertyType,
};
