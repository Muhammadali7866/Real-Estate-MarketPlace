const express = require("express");
const router = express.Router();
const listingTypeController = require("../Controller/listingTypeController");

// create endpoint
router.post("/createListingType", listingTypeController.createListingType);

// get All listingType
router.get("/getAllListingType", listingTypeController.readAllListingType);

// get one Listing Type
router.get("/getOneListingType/:id", listingTypeController.readOneListingType);

// update
router.patch("/updateListingType/:id", listingTypeController.updateListingType);

// delete Listing Type
router.delete(
  "/deleteListingType/:id",
  listingTypeController.deleteListingType
);

module.exports = router;
