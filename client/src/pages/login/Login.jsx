import React from 'react';
import "./login.css";
import TheLifeSavers from "../../svgs/The Lifesavers One on One.svg";

function Login(){
    return(
        <div>
            Login page component.
            <img src={TheLifeSavers} alt="backgroud-img1" />
        </div>
    );
}


export default Login;