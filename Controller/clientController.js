const { Client } = require("../models/");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// crud enpoints

// create CLient
exports.createClient = catchAsync(async (req, res, next) => {
  const { firstName, lastName, emailAddress, phoneNumber } = req.body;
  const client = await Client.create({
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
  });
  return res.status(201).json({
    status: "success",
    message: "Client record is created succesfully",
    doc: {
      client,
    },
  });
});

// get ALL Client
exports.getAllClient = factory.getAll(Client);

// get One Client
exports.getOneClient = factory.getOne(Client);

// delete Client
exports.deleteClient = factory.deleteOne(Client);

// update Client
exports.updateClient = catchAsync(async (req, res, next) => {
  const { firstName, lastName, emailAddress, phoneNumber } = req.body;
  const client = await Client.findOne({ where: { id: req.params.id } });
  if (!client) {
    next(new AppError("There is no Client record in database", 404));
  }
  client.firstName = firstName;
  client.lastName = lastName;
  client.emailAddress = emailAddress;
  client.phoneNumber = phoneNumber;
  await client.save();
  return res.status(201).json({
    status: "success",
    message: "Client Record is updatd succesfully ",
    doc: {
      client,
    },
  });
});
