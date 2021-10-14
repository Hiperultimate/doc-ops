import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Home from "./pages/home/Home.jsx";
import Registration from "./pages/registration/Registration.jsx";
import DoctorAbout from "./pages/doctorAbout/DoctorAbout.jsx";
import DoctorForm from "./pages/doctorForm/DoctorForm.jsx";
import PatientAbout from "./pages/patientAbout/PatientAbout.jsx";
import PatientForm from "./pages/patientForm/PatientForm.jsx";
import Chat from "./pages/chat/Chat.jsx";

import { useAuth } from "./contexts/AuthContext.js";

function App() {
  const { currentUser } = useAuth();
  const user = { userType: "doctor" }; // Simulating signed in user data
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
          {/* <DoctorAbout /> */}
          <PatientAbout />
        </Route>
        <Route path="/form">
          {user.userType === "doctor" ? <DoctorForm /> : <PatientForm />}
        </Route>
        <Route path="/register">
          {!currentUser ? <Registration /> : <Redirect to="/"/>}
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
