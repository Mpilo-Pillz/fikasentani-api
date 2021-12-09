const express = require('express');
const { getSummary, getTotalYearsOfExperience } = require('./../controllers/summaryController');

const router = express.Router()

router.route('/').get(getSummary);
router.route('/yearsOfExperience').get(getTotalYearsOfExperience);

module.exports = router;