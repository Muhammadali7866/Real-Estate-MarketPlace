const express = require("express");
const router = express.Router();
const listingController = require("../Controller/listingController");

router.post("/createListing", listingController.createListing);
router.get("/getAllListing", listingController.getAllListing);
router.get("/getOneListing/:id", listingController.getOneListing);
router.delete("/deleteListing/:id", listingController.deleteListing);
router.patch("/update:isting/:id", listingController.updateListing);
module.exports = router;
