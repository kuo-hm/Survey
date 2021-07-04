const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Survey",
    required: [true, "Please provide question"],
  },
  answer: {
    type: Number,
    required: [true, "Please provide answer"],
  },
});

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;
