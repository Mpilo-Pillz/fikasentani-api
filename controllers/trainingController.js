require('dotenv').config();
const mongoose = require('mongoose');
const Training = require('../models/training');
mongoose.connect(process.env.DB_URL)
.then(() => console.log("Connection to Mongo successful"))
.catch(() => console.log("Connection to Mongo failed"));


const createUdemyCourse = async (req, res, next) => {
    const newCompletedCourse = new Training({
        name: req.body.name,
        img: req.body.img,
        provider: req.body.provider,
        hours: req.body.hours,
        instructor: req.body.instructor,
        instructorprofile: req.body.instructorprofile,
        courselink: req.body.courselink,
    });
    const result = await newCompletedCourse.save();  

    res.json(result);
}

exports.getAllTrainings = async (req, res, next) => {
   console.log("TODO add get logic");
}

exports.createUdemyCourse = createUdemyCourse;