const { Feature } = require("../models/");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

// cread api endPoints

// 1)create
exports.createFeature = catchAsync(async (req, res, next) => {
  // destructure the relvent information from the request body
  const { featureName } = req.body;
  if (!featureName) {
    return next(
      new AppError("Please input the information to create record", 401)
    );
  }
  const feature = await Feature.create({ featureName });
  return res.status(201).json({
    status: "success",
    message: "feature record is created succesfully",
    data: {
      feature,
    },
  });
});

// 2) Read All
exports.getAllFeature = factory.getAll(Feature);

// // 3) read one
exports.getOneFeature = factory.getOne(Feature);

// // 4) update listingStaus
exports.updateFeature = catchAsync(async (req, res, next) => {
  const { featureName } = req.body;
  if (!featureName) {
    return next(
      new AppError("Please input the information to create record", 401)
    );
  }
  const feature = await Feature.findOne({
    where: { id: req.params.id },
  });
  feature.featureName = featureName;
  await feature.save();
  if (!Feature) {
    return next(new AppError("There is no record of that Id", 404));
  }
  return res.status(201).json({
    message: "Feature Record is updated succesfully",
    status: "success",
    data: {
      feature,
    },
  });
});

// // delete Listing Status
exports.deleteFeature = factory.deleteOne(Feature);
