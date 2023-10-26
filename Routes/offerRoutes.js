const express = require("express");
const router = express.Router();
const offerController = require("../Controller/offerController");

// create endpoint
router.post("/createOffer", offerController.createOffer);

//2) get All listing Status
router.get("/getAllOffer", offerController.getAllOffer);

// // get one Listing Status
router.get("/getOneOffer/:id", offerController.getOneOffer);

// // update
router.patch("/updateOffer/:id", offerController.updateOffer);

// // delete Listing Type
router.delete("/deleteOffer/:id", offerController.deleteOffer);

module.exports = router;
