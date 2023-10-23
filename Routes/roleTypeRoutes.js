const express = require("express");
const router = express.Router();
const roleTypeController = require("../Controller/roleTypeController");

// create endpoint
router.post("/createRoleType", roleTypeController.createRoleType);

//2) get All listing Status
router.get("/getAllRoleType", roleTypeController.getAllRoleType);

// // get one Listing Status
router.get("/getOneRoleType/:id", roleTypeController.getOneRoleType);

// // update
router.patch("/updateRoleType/:id", roleTypeController.updateRoleType);

// // delete Listing Type
router.delete("/deleteRoleType/:id", roleTypeController.deleteRoleType);

module.exports = router;
