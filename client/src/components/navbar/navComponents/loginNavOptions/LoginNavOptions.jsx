import MenuBtn from "../../../../svgs/align-justify.svg";
import "./loginNavOptions.css";

function LoginNavOptions({ username , givePopUp }) {
  const {popUp, popUpState} = givePopUp;
  return (
    <>
      <a href="/about" className="link items">
        {username}
      </a>
      <img className="menu-btn" onClick={() => popUpState(!popUp)} src={MenuBtn} alt="menu-btn" />
    </>
  );
}

export default LoginNavOptions;
