const express = require('express');
const {createUdemyCourse, getAllTrainings} = require('../controllers/trainingController'); 

const router = express.Router();

router.route('/').post(createUdemyCourse);
router.route('/').get(getAllTrainings)

module.exports = router;