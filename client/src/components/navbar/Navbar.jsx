import { useState } from "react";
import Logo from "../logo/Logo.jsx";
import LogoutNavOptions from "./navComponents/LogoutNavOptions.jsx";
import LoginNavOptions from "./navComponents/loginNavOptions/LoginNavOptions.jsx";
import PopUpMenu from "./navComponents/popUpMenu/PopUpMenu.jsx";

import "./navbar.css";

function Navbar({ isFixed }) {
  const user = { username: "Zambalia Zankras Zakozi" };
  // const user = {};
  let [popUp, popUpState] = useState(false);

  // useEffect(() => {
  //   console.log(popUp);
  // });
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
