const express = require("express");
const {
  createTool,
  getAllTools,
  updateTool,
  getTool,
} = require("../controllers/toolsController");

const router = express.Router();

router.route("/").post(createTool);
router.route("/").get(getAllTools);
router.route("/:id").get(getTool);
router.route("/:id").put(updateTool);

module.exports = router;
