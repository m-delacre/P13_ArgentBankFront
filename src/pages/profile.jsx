import React from "react";
import Account from "../components/account/account";
import Welcome from "../components/welcome/welcome";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Profile() {
  let isConnected = useSelector((state) => state.isLogged);
  let firstName = useSelector((state) => state.firstName);
  let lastName = useSelector((state) => state.lastName);

  if (isConnected === true) {
    return (
      <React.Fragment>
        <main className="main bg-dark">
          <div className="header">
            <Welcome firstName={firstName} lastName={lastName} />
          </div>
          <h2 className="sr-only">Accounts</h2>
          <Account
            title="Argent Bank Checking (x8349)"
            amount="2,082.79"
            amountDescription="Available Balance"
          />
          <Account
            title="Argent Bank Savings (x6712)"
            amount="10,928.42"
            amountDescription="Available Balance"
          />
          <Account
            title="Argent Bank Credit Card (x8349)"
            amount="184.30"
            amountDescription="Current Balance"
          />
        </main>
      </React.Fragment>
    );
  }

  return (
    <div className="profile-notLoggedIn bg-dark">
      <p>You must be logged in to access this page.</p>
      <div className="profile-notLoggedIn-btnGroup">
        <Link to={"/"}>
          <button className="profilelogin-button">Home</button>
        </Link>
        <Link to={"/login"}>
          <button className="profilelogin-button">Sign in</button>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
