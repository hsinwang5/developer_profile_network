import axios from "axios";
//axios defaults can set auth headers

const setAuthToken = token => {
  if (token) {
    //Apply to every request if token exists
    axios.defaults.headers.common["Authorization"] = token; //Bracket is header name
  } else {
    //Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
