const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, "Please provide question"],
  },
  data: {
    type: [Number],
    required: [true, "Please provide answer"],
  },
});

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;
