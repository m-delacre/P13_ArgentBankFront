import React from "react";
import { useState } from "react";
import callAPI from "../../service/callAPI";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function SignInForm() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  //states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [error, setError] = useState(false);

  //email change value
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  //password change value
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  //connexion
  async function connexion(email, password) {
    //if the information entered is correct we set the token in localStorage
    callAPI.login(email, password);

    //if response is false then we set error to true and use it later to show error message
    if (!await callAPI.login(email, password)) {
      setError(true);
    }
    //if response is good we get user info to set the globale state
    if (callAPI.login(email, password)) {
      let userInfo = await callAPI.getUserProfile(localStorage.getItem("token"));
      let firstName = userInfo.body.firstName;
      let lastName = userInfo.body.lastName;
      let token = localStorage.getItem("token");
      //set globale state with the recovered information
      dispatch({
        type: "login",
        payload: { firstName: firstName, lastName: lastName, token: token },
      });
      navigate("/profile");
    }
  }

  return (
    <React.Fragment>
      <form>
        {error ? <p className="error-login-message">login declined, try again</p> : null}
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" onChange={handleChangeEmail} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={handleChangePassword}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" onClick={(e) => { e.preventDefault(); connexion(email, password)} }>
          Sign In
        </button>
      </form>
    </React.Fragment>
  );
}

export default SignInForm;
