const express = require("express");
const router = express.Router();
const clientController = require("../Controller/clientController");

router.post("/createClient", clientController.createClient);
router.get("/getAllCLient", clientController.getAllClient);
router.get("/getOneClient/:id", clientController.getOneClient);
router.delete("/deleteClient/:id", clientController.deleteClient);
router.patch("/updateClient/:id", clientController.updateClient);

module.exports = router;
