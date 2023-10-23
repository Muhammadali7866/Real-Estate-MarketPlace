const { ListingStatus } = require("../models/");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

// cread api endPoints

// 1)create
exports.createListingStatus = catchAsync(async (req, res, next) => {
  const listingId = req.params.id;
  // destructure the relvent information from the request body
  const { description } = req.body;
  const listingStatus = await ListingStatus.create({ description });
  return res.status(201).json({
    status: "success",
    message: "ListingStatus record is created succesfully",
    data: {
      listingStatus,
    },
  });
});

// 2) Read All
exports.getAllListingStatus = factory.getAll(ListingStatus);

// 3) read one
exports.getOneListingStatus = factory.getOne(ListingStatus);

// 4) update listingStaus
exports.updateListingStatus = catchAsync(async (req, res, next) => {
  const { description } = req.body;
  if (!description) {
    return next(
      new AppError("Please input the information to update the record", 401)
    );
  }
  const listingStatus = await ListingStatus.findOne({
    where: { id: req.params.id },
  });
  listingStatus.description = description;
  await listingStatus.save();
  if (!listingStatus) {
    return next(new AppError("There is record of that Id", 404));
  }
  return res.status(201).json({
    message: "Listing Status Record is updated succesfully",
    status: "success",
    data: {
      listingStatus,
    },
  });
});

// delete Listing Status
exports.deleteListingStatus = factory.deleteOne(ListingStatus);
