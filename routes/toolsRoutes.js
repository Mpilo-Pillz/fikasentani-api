const express = require("express");
const { createTool, getAllTools } = require("../controllers/toolsController");

const router = express.Router();

router.route("/").post(createTool);
router.route("/").get(getAllTools);

module.exports = router;
