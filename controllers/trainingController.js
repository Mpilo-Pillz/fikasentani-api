require('dotenv').config();
const mongoose = require('mongoose');
const Training = require('../models/training');



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

    res.status(201).json(result);
}

const getAllTrainings = async (req, res, next) => {
   const trainings = await Training.find().exec();
   res.status(200).json(trainings);
}

exports.createUdemyCourse = createUdemyCourse;
exports.getAllTrainings = getAllTrainings;