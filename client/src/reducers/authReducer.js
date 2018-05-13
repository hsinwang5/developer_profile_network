// import { TEST_DISPATCH } from "../actions/types";
import { SET_CURRENT_USER } from "../actions/types";
// import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";
import isEmpty from "../validation/is-empty";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload), //if empty object, then no auth
        user: action.payload
      };
    default:
      return state;
  }
}
