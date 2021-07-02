const Survey = require("../models/survey");
const Answer = require("../models/surveyAnswer");
const ErrorResponse = require("../utils/errorResponse");

exports.postSurvey = async (req, res, next) => {
  const { question, answer } = req.body;

  try {
    const survey = await Survey.findOne({ question });
    if (!survey) {
      const surveys = await Survey.create({
        question,
        answer
      
      });
      res.status(200).json({ sucess: true, surveys: surveys });
    } else return next(new ErrorResponse("Question already Registerd", 401));
  } catch (err) {
    next(err);
  }
};
exports.postAnswer = async (req, res, next) => {
  const { question, answer } = req.body;
  const survey = await Survey.findOne({ question });
  if(survey) {
    Survey.findOneAndUpdate({question:question},{$push :{answer:answer}})
    res.status(200).json({ sucess: true, surveys: Survey,update:"true" });

  }
  try {
    const answers = await Answer.create({
      question,
      answer,
    });
    res.status(200).json({ sucess: true, surveys: answers });
  } catch (err) {
    next(err);
  }
};

exports.getSurvey = async (req, res, next) => {
  try {
    const survey = await Survey.find();
    res.status(200).json({ sucess: true, surveys: survey });
  } catch (err) {
    next(err);
  }
};
exports.getAnswer = async (req, res, next) => {
  const { question } = req.body;

  try {
    const answer = await Answer.find({ question });
    res.status(200).json({ sucess: true, surveys: answer });
  } catch (err) {
    next(err);
  }
};
