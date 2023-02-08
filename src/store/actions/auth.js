import { auth as authType } from "../typesActions/types";
import { setUserCookie } from "../../services/session";

import api from "../../services/api";

import toast from "react-hot-toast";

export const auth = (params) => (dispatch) => {
  dispatch({ type: authType.AUTH_REQUEST });

  return new Promise((resolve, reject) => {
    api
      .post("/login",  params)
      .then((res) => {
        const { data } = res;
        const { message, user } = data;

        // setUserCookie(user);

        toast.success(message, {
          duration: 5000,
        });

        dispatch({
          type: authType.AUTH_SUCCESS,
          message: "sucesso...",
          user: [{ name: "anderson" }],
        });
        resolve(data);
      })
      .catch((error) => {
        const { response: err } = error;
        const message =
          err && err.data ? err.data.message : "Erro desconhecido";

        toast.error(message, {
          duration: 5000,
        });

        dispatch({ type: authType.AUTH_FAILURE, message });
        reject(error);
      });
  });
};
