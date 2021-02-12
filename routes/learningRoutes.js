const express = require('express');
const { createLearning } = require('./../controllers/learningController');

const router = express.Router()

router.route('/').post(createLearning);


module.exports = router;