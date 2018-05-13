import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

//Register User - action creator - will dispatch to reducer along w/ user data
//2nd dispatch function allows asynchronus dispatch
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
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      //save to localStorage
      const { token } = res.data; //destructuring - token = res.data.token
      //Set token to localStorage - only stores strings. setItem(name, string),
      //where string = the token (since it is a string as well)
      localStorage.setItem("jwtToken", token);
      //Set token to Auth header (must have auth in header)
      setAuthToken(token);
      //In order to decode the token, use npm i jwt-decode
      //jwt-decode will extact user info from the bearer token string

      //Decode token to get user data
      const decoded = jwt_decode(token);
      //set current user
      dispatch(setCurrentUser(decoded));
      //SAME AS:
      // dispatch({
      //   type: SET_CURRENT_USER,
      //   payload: decoded
      // });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//log user out
export const logoutUser = () => dispatch => {
  //Remove token from localstorage
  localStorage.removeItem("jwtToken");
  //remove auth header for future requests - false removes auth headers
  setAuthToken(false);
  //set current user to empty {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

//set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
