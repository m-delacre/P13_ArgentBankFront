import React from "react";
import { useSelector } from "react-redux";
import SignInForm from "../components/signInForm/signInForm";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  let isLogged = useSelector((state)=>state.isLogged);

  if(isLogged === true){
    navigate('/profile')
  }

  return (
    <React.Fragment>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <SignInForm />
        </section>
      </main>
    </React.Fragment>
  );
}

export default Login;
