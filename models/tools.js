const mongoose = require("mongoose");

const toolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  thumbnail: { type: String, required: true },
  proficiency: { type: Number, required: true },
  toolType: {
    type: String,
    uppercase: true,
    enum: ['LANGUAGE', 'FRONTEND', 'BACKEND', 'TEST']
  }
});

module.exports = mongoose.model("Tool", toolSchema);
