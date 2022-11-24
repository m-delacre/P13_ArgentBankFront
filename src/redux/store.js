import { createStore } from "redux";
import produce from "immer";

//state initial
const initialState = {
  isLogged: false,
  firstName: "",
  lastName: "",
  token: "",
};

//action creator
export const login = (firstName, lastName, token) => ({
  type: "login",
  payload: { firstName: firstName, lastName: lastName, token: token },
});

export const logout = () => ({ type: "logout" });

export const nameChange = (firstName, lastName) => ({
  type: "nameChange",
  payload: { firstName: firstName, lastName: lastName },
});

function reducer(state = initialState, action) {
  //action login
  if (action.type === "login") {
    const firstName = action.payload.firstName;
    const lastName = action.payload.lastName;
    const token = action.payload.token;

    return produce(state, (draft) => {
      draft.isLogged = true;
      draft.firstName = firstName;
      draft.lastName = lastName;
      draft.token = token;
    });
  }

  //action logout
  if (action.type === "logout") {
    console.log('avant logout')
    return produce(state, (draft) => {
      draft.isLogged = false;
      draft.firstName = "";
      draft.lastName = "";
      draft.token = "";
    });
  }

  //action nameChange
  if (action.type === "nameChange") {
    const firstName = action.payload.firstName;
    const lastName = action.payload.lastName;

    return produce(state, (draft) => {
      draft.firstName = firstName;
      draft.lastName = lastName;
    });
  }

  //default state return
  return state;
}

//creation du store
export const store = createStore(reducer, initialState);
