const { Employee } = require("../models/");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");
const { DATE } = require("sequelize");

// crud enpoints

// create CLient
exports.createEmployee = catchAsync(async (req, res, next) => {
  const { firstName, lastName, jobTitle } = req.body;
  const employee = await Employee.create({
    firstName,
    lastName,
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-12-31"),
    jobTitle,
  });
  return res.status(201).json({
    status: "success",
    message: "Employee record is created succesfully",
    doc: {
      employee,
    },
  });
});

// get ALL Employee
exports.getAllClient = factory.getAll(Employee);

// get One Employee
exports.getOneClient = factory.getOne(Employee);

// delete Employee
exports.deleteClient = factory.deleteOne(Employee);

// update Employee
exports.updateClient = catchAsync(async (req, res, next) => {
  const { firstName, lastName, jobTitle } = req.body;
  const employee = await Employee.findOne({ where: { id: req.params.id } });
  if (!employee) {
    next(new AppError("There is no Employee record in database", 404));
  }
  employee.firstName = firstName;
  employee.lastName = lastName;

  employee.startDate = new DATE();
  employee.endDate = "null";
  employee.jobTitle = jobTitle;
  await employee.save();
  return res.status(201).json({
    status: "success",
    message: "Employee Record is updatd succesfully ",
    doc: {
      employee,
    },
  });
});
