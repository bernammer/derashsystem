const express = require("express");
const router = express.Router();
const boloProcessController = require("./../controllers/boloProcessController");

router.get("/getAll", boloProcessController.getAll);
router.get("/:id", boloProcessController.getById);
router.post("/", boloProcessController.create);
router.put("/:id", boloProcessController.update);
router.delete("/:id", boloProcessController.deleteBoloProcess);

module.exports = router;
