const {
  Client,
  ClientPropertyInterest,
  ClientInspection,
  Inspection,
} = require("../models/");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

// crud enpoints

// create CLient
exports.createClient = catchAsync(async (req, res, next) => {
  const { firstName, lastName, emailAddress, phoneNumber, inspectionId } =
    req.body;
  const client = await Client.create({
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
  });

  // assign inspection to clients
  await ClientInspection.create({
    clientId: client.id,
    inspectionId: inspectionId,
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

// create controller for client property Interest

exports.clientPropertyInterest = catchAsync(async (req, res, next) => {
  const { propertyId, clientId } = req.body;

  // 1)first check if already client interested property then delete
  const clientPropertyInterest = await ClientPropertyInterest.findOne({
    where: { propertyId: propertyId, clientId: clientId },
  });
  if (clientPropertyInterest) {
    await clientPropertyInterest.destroy();
  } else {
    // create client property intererst

    await ClientPropertyInterest.create({
      clientId: clientId,
      propertyId: propertyId,
    });
  }
  return res.status(201).json({
    status: "success",
  });
});

exports.allInspectionClient = catchAsync(async (req, res, next) => {
  const allInspection = await Client.findAll(
    { where: { id: req.params.id } },
    { include: Inspection }
  );
  res.status(200).json({
    message: "All the inspections the client attended",
    data: { allInspection },
  });
});
