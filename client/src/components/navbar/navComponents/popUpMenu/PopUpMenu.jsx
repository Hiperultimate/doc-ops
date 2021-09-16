import "./popUpMenu.css";

function PopUpMenu() {
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
          <a href="log-out" className="pop-up-items">
            Log out
          </a>
        </li>
      </ul>
    </div>
  );
}

export default PopUpMenu;
