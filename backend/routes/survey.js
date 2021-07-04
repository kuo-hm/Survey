const express = require("express");
const router = express.Router();

const {
  postSurvey,
  getSurvey,
  postAnswer,
  getAnswer,
  getAggregation,
} = require("../controllers/survey");

router.route("/postSurvey").post(postSurvey);
router.route("/postAnswer").post(postAnswer);
router.route("/getAnswer").post(getAnswer);
router.route("/getSurvey").get(getSurvey);
router.route("/getAggregation").get(getAggregation);

module.exports = router;
