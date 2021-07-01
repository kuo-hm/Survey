const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, "Please provide question"],
  },
  answer1: {
    type: String,
    required: [true, "Please provide answer"],
  },
  answer2: {
    type: String,
    required: [true, "Please provide answer"],
  },
  answer3: {
    type: String,
    required: [true, "Please provide answer"],
  },
  answer4: {
    type: String,
    required: [true, "Please provide answer"],
  },
});

const Survey = mongoose.model("Survey", surveySchema);

module.exports = Survey;
