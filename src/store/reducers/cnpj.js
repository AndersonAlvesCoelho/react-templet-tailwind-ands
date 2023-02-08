import {  cnpj } from "../typesActions/types";

const initialState = {
  login: false,
  data: [],
  message: "",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case cnpj.CNPJ_REQUEST:
      return {
        ...state,
        login: true,
        data: [],
      };

    case cnpj.CNPJ_SUCCESS:
      const { data } = action;
      return {
        ...state,
        login: false,
        data,
      };

    case cnpj.CNPJ_FAILURE:
      return {
        ...state,
        login: false,
        data: [],
      };

    default:
      return state;
  }
}
