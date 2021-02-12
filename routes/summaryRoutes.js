const express = require('express');
const summaryController = require('./../controllers/summaryController');

const router = express.Router()

router.route('/').get(summaryController.getSummary);

module.exports = router;