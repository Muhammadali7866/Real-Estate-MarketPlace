const { Listing } = require("../models/");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");
const { DATE } = require("sequelize");

// crud enpoints

// create Listing
exports.createListing = catchAsync(async (req, res, next) => {
  const { price, propertyId, listingStatusId, listingTypeId } = req.body;
  const currentDate = new DATE();
  const listing = await Listing.create({
    price,
    propertyId,
    listingStatusId,
    listingTypeId,
  });
  return res.status(201).json({
    status: "success",
    message: "Listing record is created succesfully",
    doc: {
      listing,
    },
  });
});

// get ALL Listing
exports.getAllListing = factory.getAll(Listing);

// get One Listing
exports.getOneListing = factory.getOne(Listing);

// delete Listing
exports.deleteListing = factory.deleteOne(Listing);

// update Listing
exports.updateListing = catchAsync(async (req, res, next) => {
  const { price, propertyId, listingStatusId, listingTypeId } = req.body;
  const listing = await Listing.findOne({ where: { id: req.params.id } });
  if (!listing) {
    next(new AppError("There is no Listing record in database", 404));
  }
  listing.price = price;
  listing.listingStatusId = listingStatusId;
  listing.propertyId = propertyId;
  listing.listingTypeId = listingTypeId;
  await listing.save();
  return res.status(201).json({
    status: "success",
    message: "Listing Record is updatd succesfully ",
    doc: {
      listing,
    },
  });
});
