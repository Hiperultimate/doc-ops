import { useState } from "react";
import Logo from "../logo/Logo.jsx";
import LogoutNavOptions from "./navComponents/LogoutNavOptions.jsx";
import LoginNavOptions from "./navComponents/loginNavOptions/LoginNavOptions.jsx";
import PopUpMenu from "./navComponents/popUpMenu/PopUpMenu.jsx";
import "./navbar.css";

import { useAuth } from "../../utils/contexts/AuthContext.js";

function Navbar({ isFixed }) {
  const { currentUserData } = useAuth();
  const user = currentUserData ? currentUserData.type === 1 ? {username : currentUserData.doctorName} : {username: currentUserData.name} : "";
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
