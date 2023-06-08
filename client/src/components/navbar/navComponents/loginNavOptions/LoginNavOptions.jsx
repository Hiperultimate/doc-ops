import { Link } from "react-router-dom";
import MenuBtn from "../../../../svgs/align-justify.svg";
import "./loginNavOptions.css";

function LoginNavOptions({ username, givePopUp }) {
  const { popUp, popUpState } = givePopUp;
  return (
    <>
      <Link to="/about" className="link items">
        {username}
      </Link>
      <img
        className="menu-btn"
        onClick={() => popUpState(!popUp)}
        src={MenuBtn}
        alt="menu-btn"
      />
    </>
  );
}

export default LoginNavOptions;
