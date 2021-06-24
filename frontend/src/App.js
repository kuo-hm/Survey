import SurveyPage from "./components/SurveyPage";
import Tabs from "./components/Tabs";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Route exact path="/" component={Tabs} />
      <Route exact path="/survey" component={SurveyPage} />
    </div>
  );
}

export default App;
