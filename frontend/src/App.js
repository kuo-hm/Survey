import SurveyPage from "./Pages/Survey/SurveyPage.jsx";
import Tabs from "./Pages/Home/Tabs.jsx";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Sign from "./Pages/Log/Sign.jsx";
import PrivateRoute from "./routing/PrivateRoute";
function App() {
  return (
    <div>
      <NavBar />
      <Route exact path="/" component={Tabs} />
      <PrivateRoute exact path="/survey" component={SurveyPage} />

      <Route exact path="/sign" component={Sign} />
    </div>
  );
}

export default App;
