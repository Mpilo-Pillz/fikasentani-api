const express = require("express");
const { createTool, getAllTools, updateTool } = require("../controllers/toolsController");

const router = express.Router();

router.route("/").post(createTool);
router.route("/").get(getAllTools);
router.route("/:id").put(updateTool);

module.exports = router;
