const express = require("express");
const router = express.Router();
const offerStatusController = require("../Controller/offerStatusController");

// create endpoint
router.post("/createOfferStatus", offerStatusController.createOfferStatus);

//2) get All listing Status
router.get("/getAllOfferStatus", offerStatusController.getAllOfferStatus);

// // get one Listing Status
router.get("/getOneOfferStatus/:id", offerStatusController.getOneOfferStatus);

// // update
router.patch("/updateOfferStatus/:id", offerStatusController.updateOfferStatus);

// // delete Listing Type
router.delete(
  "/deleteOfferStatus/:id",
  offerStatusController.deleteOfferStatus
);

module.exports = router;
