const { contractStatus } = require("../models/");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

// cread api endPoints

// 1)create
exports.createContractStatus = catchAsync(async (req, res, next) => {
  // destructure the relvent information from the request body
  const { description } = req.body;
  const contractStatuss = await contractStatus.create({ description });
  return res.status(201).json({
    status: "success",
    message: "contractStatus record is created succesfully",
    data: {
      contractStatuss,
    },
  });
});

// 2) Read All
exports.getAllContractStatus = factory.getAll(contractStatus);

// 3) read one
exports.getOneContractStatus = factory.getOne(contractStatus);

// 4) update listingStaus
exports.updateContractStatus = catchAsync(async (req, res, next) => {
  const { description } = req.body;
  if (!description) {
    return next(
      new AppError("Please input the information to update the record", 401)
    );
  }
  const contractStatuss = await contractStatus.findOne({
    where: { id: req.params.id },
  });
  contractStatuss.description = description;
  await contractStatuss.save();
  if (!contractStatuss) {
    return next(new AppError("There is record of that Id", 404));
  }
  return res.status(201).json({
    message: "Role Type  Record is updated succesfully",
    status: "success",
    data: {
      contractStatuss,
    },
  });
});

// delete Listing Status
exports.deleteContractStatus = factory.deleteOne(contractStatus);
