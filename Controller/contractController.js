const { Contract } = require("../models/");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

// cread api endPoints

// 1)create
exports.createContract = catchAsync(async (req, res, next) => {
  // destructure the relvent information from the request body
  const {
    contractDocument,
    signedDate,
    startDate,
    endDate,
    listingTypeId,
    responsibleEmployeeId,
    contractStatusId,
    clientId,
    propertyId,
  } = req.body;
  const contract = await Contract.create({
    contractDocument,
    signedDate,
    startDate,
    endDate,
    listingTypeId,
    responsibleEmployeeId,
    contractStatusId,
    clientId,
    propertyId,
  });
  return res.status(201).json({
    status: "success",
    message: "Contract record is created succesfully",
    data: {
      contract,
    },
  });
});

// 2) Read All
exports.getAllContract = factory.getAll(Contract);

// 3) read one
exports.getOneContract = factory.getOne(Contract);

// 4) update Contract
exports.updateContract = catchAsync(async (req, res, next) => {
  const {
    contractDocument,
    signedDate,
    startDate,
    endDate,
    listingTypeId,
    responsibleEmployeeId,
    contractStatusId,
    clientId,
    propertyId,
  } = req.body;
  const newData = {
    contractDocument,
    signedDate,
    startDate,
    endDate,
    listingTypeId,
    responsibleEmployeeId,
    contractStatusId,
    clientId,
    propertyId,
  };
  await Contract.update(newData, { where: { id: req.params.id } });

  return res.status(201).json({
    message: "Contract  Record is updated succesfully",
    status: "success",
  });
});

// delete Listing Status
exports.deleteContract = factory.deleteOne(Contract);
