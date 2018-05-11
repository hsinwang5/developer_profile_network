import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

//call by using this.props.auth (or whatever auth is named)
//combines all reducers
export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});
