const express = require("express");
const router = express.Router();
const contractStatusController = require("../Controller/contractStatusController");

// create endpoint
router.post(
  "/createContractStatus",
  contractStatusController.createContractStatus
);

//2) get All listing Status
router.get(
  "/getAllContractStatus",
  contractStatusController.getAllContractStatus
);

// // get one Listing Status
router.get(
  "/getOneContractStatus/:id",
  contractStatusController.getOneContractStatus
);

// // update
router.patch(
  "/updateContractStatus/:id",
  contractStatusController.updateContractStatus
);

// // delete Listing Type
router.delete(
  "/deleteContractStatus/:id",
  contractStatusController.deleteContractStatus
);

module.exports = router;
