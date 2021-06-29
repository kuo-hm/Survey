import Surey from "./Pages/Survey/Surey.jsx";
import Tabs from "./Pages/Home/Tabs.jsx";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Sign from "./Pages/Log/Sign.jsx";
import PrivateRoute from "./routing/PrivateRoute";
import Graphs from "./Pages/Dashboard/Graphs.jsx";
function App() {
  return (
    <div>
      <NavBar />
      <Route exact path="/" component={Tabs} />
      <Route exact path="/graph" component={Graphs} />
      <PrivateRoute exact path="/survey" component={Surey} />

      <Route exact path="/sign" component={Sign} />
    </div>
  );
}

export default App;
