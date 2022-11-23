import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import callAPI from "../../service/callAPI";

function Welcome({ firstName, lastName }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  //states
  const [editMod, setEditMod] = useState(false);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");

  //firstName change value
  const handleChangeFirstName = (event) => {
    setNewFirstName(event.target.value);
  };

  //lastName change value
  const handleChangeLastName = (event) => {
    setNewLastName(event.target.value);
  };

  async function updateName() {
    callAPI.updateUserName(newFirstName, newLastName, token);
    dispatch({
      type: "nameChange",
      payload: { firstName: newFirstName, lastName: newLastName },
    });
  }

  if (editMod === true) {
    return (
      <React.Fragment>
        <h1>
          Welcome back
          <br />
          <form className="welcome-form">
            <div className="welcome-input">
              <input
                type="text"
                id="firstName"
                placeholder={firstName}
                onChange={handleChangeFirstName}
              />
              <input
                type="text"
                id="lastName"
                placeholder={lastName}
                onChange={handleChangeLastName}
              />
            </div>
            <div className="welcome-button">
              <button className="save-button" onClick={(e) => {e.preventDefault(); updateName();setEditMod(false)}}>Save</button>
              <button className="cancel-button" onClick={() => setEditMod(false)}>
                Cancel
              </button>
            </div>
          </form>
        </h1>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <h1>
        Welcome back
        <br />
        {`${firstName} ${lastName}`}
      </h1>
      <button className="edit-button" onClick={() => setEditMod(true)}>
        Edit Name
      </button>
    </React.Fragment>
  );
}

export default Welcome;
