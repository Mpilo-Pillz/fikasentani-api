const Tool = require("../models/tools");

const createTool = async (req, res) => {
  const newTool = new Tool({
    name: req.body.name,
    thumbnail: req.body.thumbnail,
    proficiency: req.body.proficiency,
    toolType: req.body.toolType,
  });
  const result = await newTool.save();

  res.status(201).json(result);
};

const getAllTools = async (req, res) => {
  const tools = await Tool.find().exec();
  res.status(200).json(tools);
};

const getTool = async (req, res) => {
  const { id } = req.params;
  const tools = await Tool.findById(id);
  res.status(200).json(tools);
};

const updateTool = async (req, res) => {
  const { id } = req.params;
  const tool = await Tool.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.status(200).json(tool);
};

exports.createTool = createTool;
exports.getAllTools = getAllTools;
exports.getTool = getTool;
exports.updateTool = updateTool;
