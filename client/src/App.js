import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Home from "./pages/home/Home.jsx";
import Registration from "./pages/registration/Registration.jsx";
import About from "./pages/about/About.jsx";
import AccountInfo from "./pages/accountInfo/AccountInfo.jsx";
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
        <Route path="/edit-details">
          {currentUser ? <AccountInfo /> : <Redirect to="/"/>}
        </Route>
        <Route path="/register">
          {/*The redirect code is written inside registration component with some bug fixes */}
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
