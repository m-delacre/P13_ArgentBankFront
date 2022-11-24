import React from "react";
import SignInForm from "../components/signInForm/signInForm";


function Login() {
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
