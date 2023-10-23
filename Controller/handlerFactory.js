const catchAsync = require("../utils/catchAsync");
const appError = require("../utils/appError");
const AppError = require("../utils/appError");
const { Model, where } = require("sequelize");

// delete Function
const deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findOne({ where: { id: req.params.id } });
    if (!doc) {
      return next(new AppError("A record with that id is not found", 404));
    }
    await doc.destroy();
    return res.status(204).json({
      message: "success",
      data: null,
    });
  });

// Get oen Property
const getOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findOne({ where: { id: req.params.id } });
    if (!doc) {
      return next(new AppError("A record with that id not found", 404));
    }
    res.status(200).json({
      message: "the record",
      doc: {
        doc,
      },
    });
  });

// Get ALl Records function
const getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findAll({});
    if (!doc) {
      return next(new AppError("There is no record at that moment", 404));
    }
    res.status(200).json({
      status: "success",
      results: doc.length,
      data: {
        doc,
      },
    });
  });

module.exports = { getAll, getOne, deleteOne };
