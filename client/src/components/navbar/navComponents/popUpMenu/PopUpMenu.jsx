import "./popUpMenu.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext.js";

function PopUpMenu() {
  const { logout } = useAuth();
  const history = useHistory();

  const logOutHandler = async () => {
    try{
      await logout();
    }catch{
      history.push("/error-404"); // Something went wrong while logging out
    }
  }
  return (
    <div className="popup-menu global-box-shadow">
      <ul className="popup-list">
        <li>
          <a href="/" className="pop-up-items">
            Home
          </a>
        </li>
        <li>
          <a href="sessions" className="pop-up-items">
            Sessions
          </a>
        </li>
        <li>
          <a href="edit-profile" className="pop-up-items">
            Edit Profile
          </a>
        </li>
        <li>
          <a onClick={logOutHandler} href="/" className="pop-up-items">
            Log out
          </a>
        </li>
      </ul>
    </div>
  );
}

export default PopUpMenu;
