import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import DoctorAbout from "./pages/doctorAbout/DoctorAbout.jsx";

// On production, manage API keys to follow the site url

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <DoctorAbout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
