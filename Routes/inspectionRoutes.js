const express = require("express");
const router = express.Router();
const inspectionController = require("../Controller/inspectionController");

// create endpoint
router.post("/createInspection", inspectionController.createInspection);

//2) get All listing Status
router.get("/getAllInspection", inspectionController.getAllInspection);

// // get one Listing Status
router.get("/getOneInspection/:id", inspectionController.getOneInspection);

// // update
router.patch("/updateInspection/:id", inspectionController.updateInspection);

// // delete Listing Type
router.delete("/deleteInspection/:id", inspectionController.deleteInspection);

module.exports = router;
