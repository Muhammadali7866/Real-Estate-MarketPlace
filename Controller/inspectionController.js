const { Inspection } = require("../models/");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

// cread api endPoints

// 1)create
exports.createInspection = catchAsync(async (req, res, next) => {
  // destructure the relvent information from the request body
  const { inspectionDateTime, propertyId, ResponsibleEmployeeId } = req.body;
  console.log("The res", ResponsibleEmployeeId);
  const inspections = await Inspection.create({
    inspectionDateTime,
    propertyId,
    ResponsibleEmployeeId,
  });
  return res.status(201).json({
    status: "success",
    message: "Inspection record is created succesfully",
    data: {
      inspections,
    },
  });
});

// 2) Read All
exports.getAllInspection = factory.getAll(Inspection);

// 3) read one
exports.getOneInspection = factory.getOne(Inspection);

// 4) update listingStaus
exports.updateInspection = catchAsync(async (req, res, next) => {
  const { inspectionDateTime, propertyId, ResponsibleEmployeeId } = req.body;
  const newData = {
    inspectionDateTime,
    propertyId,
    ResponsibleEmployeeId,
  };

  const inspec = await Inspection.update(newData, {
    where: { id: req.params.id },
  });
  return res.status(201).json({
    message: "Inspection Record is updated succesfully",
    status: "success",
    data: {
      inspec,
    },
  });
});

// delete Listing Status
exports.deleteInspection = factory.deleteOne(Inspection);
