const express = require("express");
const router = express.Router();

const {
  postSurvey,
  getSurvey,
  postAnswer,
  getAnswer,
} = require("../controllers/survey");

router.route("/postSurvey").post(postSurvey);
router.route("/postAnswer").post(postAnswer);
router.route("/getAnswer").post(getAnswer);
router.route("/getSurvey").get(getSurvey);

module.exports = router;
