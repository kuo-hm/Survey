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
        answer,
      });
      res.status(200).json({ sucess: true, surveys: surveys });
    } else return next(new ErrorResponse("Question already Registerd", 401));
  } catch (err) {
    next(err);
  }
};
exports.postAnswer = async (req, res, next) => {
  const { question, answer } = req.body;
  console.log(answer);
  const answers = await Answer.create({
    question,
    answer,
  });

  if (answers) res.status(200).json({ sucess: true, anwser: answers });
  else res.status(200).json({ sucess: false, error: "something went wrong" });

  //const survey = await Answer.findOne({ question: question });
  /*
  try {
    if (survey) {
      await Answer.findOneAndUpdate(
        { question: question },
        { $push: { answer } }
      ).then((response) => {
        console.log(response);
        res
          .status(200)
          .json({ sucess: true, surveyss: Answer, update: "true" });
      });
      // res.status(200).json({ sucess: true, update: survey });
    } else {
      const answers = await Answer.create({
        question,
        answer,
      });
      res.status(200).json({ sucess: true, surveys: answers, update: "false" });
      // res.status(200).json({ sucess: false, update: survey });
    }
  } catch (err) {
    next(err);
  }*/
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

exports.getAggregation = async (req, res, next) => {
  var pipeline = [
    {
      $group: {
        _id: "question",
        count: {
          $sum: 1.0,
        },
      },
    },
    {
      $lookup: {
        from: "surveys",
        localField: "_id",
        foreignField: "_id",
        as: "_id",
      },
    },
  ];
  const answ = await Answer.aggregate(pipeline);
  res.status(200).json({ sucess: true, surveys: answ });
};
