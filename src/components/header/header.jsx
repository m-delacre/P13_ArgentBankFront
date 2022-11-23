import React from "react";
import logo from "../../assets/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Header() {
  let dispatch = useDispatch();

  let isConnected = useSelector((state) => state.isLogged);
  let firstName = useSelector((state) => state.firstName);

  function logout() {
    dispatch({ type: "logout" });
    localStorage.setItem("token", "");
  }

  if (isConnected === true) {
    return (
      <React.Fragment>
        <nav className="main-nav">
          <Link to={"/"} className="main-nav-logo">
            <img
              className="main-nav-logo-image"
              src={logo}
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </Link>
          <div className="loggedIn">
            <Link to={`/profile`} className="main-nav-item">
              <i className="fa fa-user-circle icone-size"></i>
              {firstName}
            </Link>
            <Link
              to={"/"}
              className="main-nav-item"
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}
            >
              <i className="fa fa-sign-out icone-size"></i>
              Sign out
            </Link>
          </div>
        </nav>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <nav className="main-nav">
        <Link to={"/"} className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link to={`login`}>
            <p className="main-nav-item">
              <i className="fa fa-user-circle icone-size"></i>
              Sign In
            </p>
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header;
