import Surey from "./Pages/Survey/Surey.jsx";
import Home from "./Pages/Home/Home.jsx";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Sign from "./Pages/Log/Sign.jsx";
import PrivateRoute from "./routing/PrivateRoute";
import Graphs from "./Pages/Dashboard/Graphs.jsx";
import SurveyPost from "./Pages/Surveys/SurveyPost.jsx";
function App() {
  return (
    <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/graph" component={Graphs} />
      <Route exact path="/add" component={SurveyPost} />
      <PrivateRoute exact path="/survey" component={Surey} />
      <Route exact path="/sign" component={Sign} />
    </div>
  );
}

export default App;
