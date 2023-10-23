const { roleType } = require("../models/");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

// cread api endPoints

// 1)create
exports.createRoleType = catchAsync(async (req, res, next) => {
  // destructure the relvent information from the request body
  const { description } = req.body;
  const roleTypes = await roleType.create({ description });
  return res.status(201).json({
    status: "success",
    message: "roleType record is created succesfully",
    data: {
      roleTypes,
    },
  });
});

// 2) Read All
exports.getAllRoleType = factory.getAll(roleType);

// 3) read one
exports.getOneRoleType = factory.getOne(roleType);

// 4) update listingStaus
exports.updateRoleType = catchAsync(async (req, res, next) => {
  const { description } = req.body;
  if (!description) {
    return next(
      new AppError("Please input the information to update the record", 401)
    );
  }
  const roleTypes = await roleType.findOne({
    where: { id: req.params.id },
  });
  roleTypes.description = description;
  await roleTypes.save();
  if (!roleTypes) {
    return next(new AppError("There is record of that Id", 404));
  }
  return res.status(201).json({
    message: "Role Type  Record is updated succesfully",
    status: "success",
    data: {
      roleTypes,
    },
  });
});

// delete Listing Status
exports.deleteRoleType = factory.deleteOne(roleType);
