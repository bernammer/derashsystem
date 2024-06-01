const express = require("express");
const router = express.Router();
const boloProcessController = require("./../controllers/boloProcessController");

router.get("/getAll", boloProcessController.getAll);
router.get("/:id", boloProcessController.getById);
router.post("/", boloProcessController.create);
router.put("/:id", boloProcessController.update);
router.delete("/:id", boloProcessController.deleteBoloProcess);
router.get('/get-bank-slip/:id', boloProcessController.getBankSlip);
router.get("/user/:userid" , boloProcessController.getUserBolo)





module.exports = router;
