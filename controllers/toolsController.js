require("dotenv").config();

const mongoose = require("mongoose");
const Tool = require("../models/Tool");
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Connection to Mongo successful"))
  .catch(() => console.log("Connection to Mongo failed"));

const createTool = async (req, res) => {
  const newTool = new Tool({
    name: req.body.name,
    thumbnail: req.body.thumbnail,
    proficiency: req.body.proficiency,
  });
  const result = await newTool.save();

  res.status(201).json(result);
};

const getAllTools = async (req, res) => {
  const trainings = await Training.find().exec();
  res.status(200).json(trainings);
};

exports.createTool = createTool;
exports.getAllTools = getAllTools;
