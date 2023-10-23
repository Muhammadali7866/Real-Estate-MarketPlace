const express = require("express");
const router = express.Router();
const featureController = require("../Controller/featureController");

// create endpoint
router.post("/createFeature", featureController.createFeature);

//2) get All listing Status
router.get("/getAllFeature", featureController.getAllFeature);

// // get one Listing Status
router.get("/getOneFeature/:id", featureController.getOneFeature);

// // update
router.patch("/updateFeature/:id", featureController.updateFeature);

// // delete Listing Type
router.delete("/deleteFeature/:id", featureController.deleteFeature);

module.exports = router;
