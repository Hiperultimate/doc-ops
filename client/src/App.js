import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Home from "./pages/home/Home.jsx";
import Registration from "./pages/registration/Registration.jsx";
import DoctorAbout from "./pages/doctorAbout/DoctorAbout.jsx";
import DoctorForm from "./pages/doctorForm/DoctorForm.jsx";
import PatientForm from "./pages/patientForm/PatientForm.jsx";

function App() {
  const user = { userType: "patient" };  // Simulating signed in user data 
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
        <Route path="/form">
          {user.userType === "doctor" ? <DoctorForm /> : <PatientForm />}
        </Route>
        <Route path="/register">
          <Registration />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
