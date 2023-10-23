const express = require("express");
const router = express.Router();
const propertyTypeController = require("../Controller/propertyTypeController");

router.post("/createPropertyType", propertyTypeController.createPropertyType);
router.get("/readAllPropertyType", propertyTypeController.readAllPropertyType);
router.get(
  "/readOnePropertyType/:id",
  propertyTypeController.readOnePropertyType
);
router.patch(
  "/updatePropertyType/:id",
  propertyTypeController.updatePropertyType
);
router.delete(
  "/deletePropertyType/:id",
  propertyTypeController.deletePropertyType
);

module.exports = router;
