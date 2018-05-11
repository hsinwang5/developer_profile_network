import axios from "axios";
import { GET_ERRORS } from "./types";

//Register User - action creator - will dispatch to reducer along w/ user data
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    //history.push is made possible using withRouter from Register.js
    .then(res => history.push("/login"))
    //err.response.data logs actual json error object
    .catch(err =>
      //dispatch needs to be called because its asynchronous
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Can redirect with this in component
//this.props.history.push('/dashboard');

//Login - Get User Token
export const loginUser = userData => dispatch => {};
