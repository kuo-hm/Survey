import "./styles/Survey.css";

const Survey = ({ t1, t2, t3, q1 }) => {
  return (
    <div className="containerSurvey">
      <form class="form">
        <div class="inputGroup">
          <h2>Question</h2>
          <input id="radio1" name="radio" type="radio" />
          <label for="radio1">Question1 </label>
        </div>
        <div class="inputGroup">
          <input id="radio2" name="radio" type="radio" />
          <label for="radio2">Question2 </label>
        </div>
        <div class="inputGroup">
          <input id="radio3" name="radio" type="radio" />
          <label for="radio3">Question3 </label>
        </div>
        <div class="inputGroup">
          <input id="radio4" name="radio" type="radio" />
          <label for="radio4">Question4 </label>
        </div>
      </form>
    </div>
  );
};

export default Survey;
