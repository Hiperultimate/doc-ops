import "./popUpMenu.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../../utils/contexts/AuthContext.js";

function PopUpMenu() {
  const { logout } = useAuth();
  const history = useHistory();

  const logOutHandler = async () => {
    try {
      await logout();
    } catch {
      history.push("/error-404"); // Something went wrong while logging out
    }
  };
  return (
    <div className="popup-menu global-box-shadow">
      <ul className="popup-list">
        <li>
          <Link to="/" className="pop-up-items">
            Home
          </Link>
        </li>
        <li>
          <Link to="/sessions" className="pop-up-items">
            Sessions
          </Link>
        </li>
        <li>
          <Link to="edit-details" className="pop-up-items">
            Edit Profile
          </Link>
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
