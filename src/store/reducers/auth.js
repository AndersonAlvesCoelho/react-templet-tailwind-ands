import { auth } from "../typesActions/types";

const initialState = {
  login: false,
  authData: [],
  message: "",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case auth.AUTH_REQUEST:
      return {
        ...state,
        login: true,
        authData: [],
      };

    case auth.AUTH_SUCCESS:
      const { user } = action;
      return {
        ...state,
        login: false,
        authData: user && user[0],
      };

    case auth.AUTH_FAILURE:
      return {
        ...state,
        login: false,
        authData: [],
      };

    default:
      return state;
  }
}
