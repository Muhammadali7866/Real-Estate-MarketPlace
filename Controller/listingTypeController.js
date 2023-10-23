const { ListingType } = require("../models/");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");
// create listing type
const createListingType = catchAsync(async (req, res, next) => {
  // 1) destructure the relevent information from the requst body
  const { description } = req.body;

  //2) creating the lsitingType record in database
  const listingType = await ListingType.create({ description });

  // return the success reponse
  res.status(201).json({
    listingType,
  });
});

// read all listing Type
const readAllListingType = catchAsync(async (req, res, next) => {
  const listingType = await ListingType.findAll({});
  if (!listingType) {
    return next(new AppError("There is no listingType is at that time ", 404));
  }
  res.status(200).json({
    message: "All listingType are",
    Totall: listingType.length,
    listingTypes: {
      listingType,
    },
  });
});

// readoOne Lisitng Type
const readOneListingType = catchAsync(async (req, res, next) => {
  const listingType = await ListingType.findOne({
    where: { id: req.params.id },
  });

  if (!listingType) {
    return next(new AppError("There is no listing type", 404));
  }

  res.status(200).json({
    listingTypes: listingType,
  });
});

// update listingType
const updateListingType = catchAsync(async (req, res, next) => {
  const listingId = req.params.id;
  const { description } = req.body;
  const lisitingtype = await ListingType.findOne({ where: { id: listingId } });
  if (!lisitingtype) {
    return next(new AppError("There is no Listing Type of that property", 404));
  }
  lisitingtype.description = description;
  await lisitingtype.save();
  res.status(201).json({
    message: "listing Type is updated succesfully",
    lisitingtype,
  });
});

const deleteListingType = factory.deleteOne(ListingType);

module.exports = {
  createListingType,
  readAllListingType,
  readOneListingType,
  updateListingType,
  deleteListingType,
};
