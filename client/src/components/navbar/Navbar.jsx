import { useState } from "react";
import Logo from "../logo/Logo.jsx";
import LogoutNavOptions from "./navComponents/LogoutNavOptions.jsx";
import LoginNavOptions from "./navComponents/loginNavOptions/LoginNavOptions.jsx";
import PopUpMenu from "./navComponents/popUpMenu/PopUpMenu.jsx";
import "./navbar.css";

import { useAuth } from "../../contexts/AuthContext.js";

function Navbar({ isFixed }) {
  const { currentUser } = useAuth();
  const user = { username: currentUser ? currentUser.email : ""}; // Use username instead of currentUser.email
  let [popUp, popUpState] = useState(false);

  return (
    <div
      className="wrapper"
      style={isFixed ? { position: "sticky" } : { position: "relative" }}
    >
      <div className="nav-bar global-box-shadow">
        <div className="nav-logo">
          <Logo />
        </div>
        <nav>
          <div className="nav-list">
            {user.username ? (
              <LoginNavOptions
                username={user.username}
                givePopUp={{ popUp, popUpState }}
              />
            ) : (
              <LogoutNavOptions />
            )}
          </div>
        </nav>
        {popUp && <PopUpMenu />}
      </div>
    </div>
  );
}

export default Navbar;
