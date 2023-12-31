const { OfferStatus } = require("../models/");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

// cread api endPoints

// 1)create
exports.createOfferStatus = catchAsync(async (req, res, next) => {
  // destructure the relvent information from the request body
  const { description } = req.body;
  const offerStatus = await OfferStatus.create({ description });
  return res.status(201).json({
    status: "success",
    message: "OfferStatus record is created succesfully",
    data: {
      offerStatus,
    },
  });
});

// 2) Read All
exports.getAllOfferStatus = factory.getAll(OfferStatus);

// 3) read one
exports.getOneOfferStatus = factory.getOne(OfferStatus);

// 4) update listingStaus
exports.updateOfferStatus = catchAsync(async (req, res, next) => {
  const { description } = req.body;
  if (!description) {
    return next(
      new AppError("Please input the information to update the record", 401)
    );
  }
  const offerStatus = await OfferStatus.findOne({
    where: { id: req.params.id },
  });
  offerStatus.description = description;
  await offerStatus.save();
  if (!offerStatus) {
    return next(new AppError("There is record of that Id", 404));
  }
  return res.status(201).json({
    message: "OfferStatus Record is updated succesfully",
    status: "success",
    data: {
      offerStatus,
    },
  });
});

// delete Listing Status
exports.deleteOfferStatus = factory.deleteOne(OfferStatus);
