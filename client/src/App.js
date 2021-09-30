import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Home from "./pages/home/Home.jsx";
import Registration from "./pages/registration/Registration.jsx";
import DoctorAbout from "./pages/doctorAbout/DoctorAbout.jsx";
import DoctorForm from "./pages/doctorForm/DoctorForm.jsx";
import PatientAbout from "./pages/patientAbout/PatientAbout.jsx";
import PatientForm from "./pages/patientForm/PatientForm.jsx";
import Chat from "./pages/chat/Chat.jsx";

import { AuthProvider } from "./contexts/AuthContext.js";

function App() {
  const user = { userType: "doctor" }; // Simulating signed in user data
  return (
    <AuthProvider>
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
            <Registration />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
