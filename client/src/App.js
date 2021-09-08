import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Home from "./pages/home/Home.jsx";
import DoctorAbout from "./pages/doctorAbout/DoctorAbout.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/about">
          <DoctorAbout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
