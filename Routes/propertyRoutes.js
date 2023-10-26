const express = require("express");
const router = express.Router();
const propertyController = require("../Controller/propertyController");
const { route } = require("./listingTypeRoutes");
const upload = require("../utils/uploadImages");

//create route
router.post("/createProperty", propertyController.createProperty);

// read All property route
router.get("/readAllProperty", propertyController.readAllProperty);

// read one property
router.get("/readOneProperty/:id", propertyController.readOneProperty);

// update Property
router.patch("/updateProperty/:id", propertyController.updateProperty);

// delete property
router.delete("/deleteProperty/:id", propertyController.deleteProperty);

// upload images router
router.post(
  "/uploadPropertyImages/:id",
  upload.array("file", 5),
  propertyController.uploadImage
);

// all employess associated with property
router.get(
  "/allEmployeeAssociateProperty/:id",
  propertyController.allEmployeeAssociateProperty
);
router.delete(
  "/deleteEmployeeProperty/:id",
  propertyController.deleteEmployeeProperty
);

// update property EMployee
router.patch(
  "/updatePropertyEmployeeRole/:id",
  propertyController.updatePropertyEmployeeRole
);

module.exports = router;
