const { Offer } = require("../models/");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

// cread api endPoints

// 1)create
exports.createOffer = catchAsync(async (req, res, next) => {
  // destructure the relvent information from the request body
  const { clientId, propertyId, offerStatusId, offerAmount } = req.body;
  const offer = await Offer.create({
    clientId,
    propertyId,
    offerStatusId,
    offerAmount,
  });
  return res.status(201).json({
    status: "success",
    message: "Offer record is created succesfully",
    data: {
      offer,
    },
  });
});

// 2) Read All
exports.getAllOffer = factory.getAll(Offer);

// 3) read one
exports.getOneOffer = factory.getOne(Offer);

// 4) update Offer
exports.updateOffer = catchAsync(async (req, res, next) => {
  const { clientId, propertyId, offerStatusId, offerAmount } = req.body;
  const newData = {
    clientId,
    propertyId,
    offerStatusId,
    offerAmount,
  };
  await Offer.update(newData, { where: { id: req.params.id } });

  return res.status(201).json({
    message: "Offer  Record is updated succesfully",
    status: "success",
  });
});

// delete Listing Status
exports.deleteOffer = factory.deleteOne(Offer);
