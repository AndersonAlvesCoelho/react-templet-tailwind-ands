import { cnae } from "../typesActions/types";

const initialState = {
  login: false,
  listCnae: [],
  message: "",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case cnae.GET_CNAE_REQUEST:
      return {
        ...state,
        login: true,
        listCnae: [],
      };

    case cnae.GET_CNAE_SUCCESS:
      const { payload } = action;
      return {
        ...state,
        login: false,
        listCnae: payload,
      };

    case cnae.GET_CNAE_FAILURE:
      return {
        ...state,
        login: false,
        listCnae: [],
      };

    default:
      return state;
  }
}
