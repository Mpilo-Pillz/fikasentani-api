const mongoose = require('mongoose');

const trainingSchema = new mongoose.Schema({
        name: {type: String, required: true},
        img: {type: String, required: true},
        provider: {type: String, required: true},
        hours: {type: Number, required: true},
        instructor: {type: String, required: true},
        instructorprofile: {type: String, required: true},
        courselink: {type: String, required: true},
});

module.exports = mongoose.model('Training', trainingSchema);