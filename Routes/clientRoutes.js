const express = require("express");
const router = express.Router();
const clientController = require("../Controller/clientController");

router.post("/createClient", clientController.createClient);
router.get("/getAllCLient", clientController.getAllClient);
router.get("/getOneClient/:id", clientController.getOneClient);
router.delete("/deleteClient/:id", clientController.deleteClient);
router.patch("/updateClient/:id", clientController.updateClient);

// api for client property Interest
router.post("/clientPropertyInterest", clientController.clientPropertyInterest);

// get all the inspections for the specific client
router.get("/allInspectionClient/:id", clientController.allInspectionClient);

module.exports = router;
