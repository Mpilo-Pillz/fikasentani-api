require('dotenv').config();
const MongoClient = require('mongodb').MongoClient
const url = process.env.DB_URL;

exports.createUdemyCourse = async (req, res, next) => {
    const newCompletedCourse = {
        name: req.body.name,
        img: req.body.img,
        provider: req.body.provider,
        hours: req.body.hours,
        instructor: req.body.instructor,
        instructorprofile: req.body.instructorprofile,
        courselink: req.body.courselink,
    }
    const client = new MongoClient(url);
    try {
        
        await client.connect();
        const db = client.db();
        const result = db.collection('trainings').insertOne(newCompletedCourse);

    } catch (error) {
        return res.json({message: 'Error occured trying to store data'})
    };
    client.close();

    res.json(newCompletedCourse)
}

exports.getAllTrainings = async (req, res, next) => {
    const client = new MongoClient(url);
    let trainings;
    try {
        await client.connect();
        const db = client.db();
        const trainings = await db.collection('trainings').find().toArray();
;    }
    catch (error) {
        return res.json({message: "Could not retrieve trainings"})
    }
    client.close();

    res.json(trainings)
}