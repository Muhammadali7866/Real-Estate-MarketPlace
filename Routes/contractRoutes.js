const express = require("express");
const router = express.Router();
const contractController = require("../Controller/contractController");

// create endpoint
router.post("/createContract", contractController.createContract);

//2) get All listing Status
router.get("/getAllContract", contractController.getAllContract);

// // get one Listing Status
router.get("/getOneContract/:id", contractController.getOneContract);

// // update
router.patch("/updateContract/:id", contractController.updateContract);

// // delete Listing Type
router.delete("/deleteContract/:id", contractController.deleteContract);

module.exports = router;
