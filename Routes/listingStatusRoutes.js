const express = require("express");
const router = express.Router();
const listingStatusController = require("../Controller/listingStatusController");

// create endpoint
router.post(
  "/createListingStatus",
  listingStatusController.createListingStatus
);

//2) get All listing Status
router.get("/getAllListingStatus", listingStatusController.getAllListingStatus);

// // get one Listing Status
router.get(
  "/getOneListingStatus/:id",
  listingStatusController.getOneListingStatus
);

// // update
router.patch(
  "/updateListingStatus/:id",
  listingStatusController.updateListingStatus
);

// // delete Listing Type
router.delete(
  "/deleteListingStatus/:id",
  listingStatusController.deleteListingStatus
);

module.exports = router;
