import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Home from "./pages/home/Home.jsx";
import Registration from "./pages/registration/Registration.jsx";
import About from "./pages/about/About.jsx";
import DoctorForm from "./pages/doctorForm/DoctorForm.jsx";
import PatientForm from "./pages/patientForm/PatientForm.jsx";
import Chat from "./pages/chat/Chat.jsx";

import { useAuth } from "./utils/contexts/AuthContext.js";

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
        <Route path="/about/:type/:UID">
          <About />
        </Route>
        <Route path="/form">
          {user.userType === "doctor" ? <DoctorForm /> : <PatientForm />}
        </Route>
        <Route path="/register">
          {/* Not setting up currentUser ternary because of unmonted component error in registry  */}
          <Registration />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
