const express = require("express");
const router = express.Router();
const employeeController = require("../Controller/employeeController");

router.post("/createEmployee", employeeController.createEmployee);
router.get("/getAllEmployee", employeeController.getAllClient);
router.get("/getOneEmployee/:id", employeeController.getOneClient);
router.delete("/deleteEmployee/:id", employeeController.deleteClient);
router.patch("/updateEmployee/:id", employeeController.updateClient);

module.exports = router;
