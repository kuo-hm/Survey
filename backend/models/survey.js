const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, "Please provide question"],
  },
  answer: {
    type: [String],
    required: [true, "Please provide answer"],
  },
  
});

const Survey = mongoose.model("Survey", surveySchema);

module.exports = Survey;
