import { cnae } from "../typesActions/types";

import api from "../../services/api";
import toast from "react-hot-toast";

export const getCnae = () => (dispatch) => {
  dispatch({ type: cnae.GET_CNAE_REQUEST });
  api
    .get('/cnae')
    .then((res) => {
      const { data } = res;
      dispatch({
        type: cnae.GET_CNAE_SUCCESS,
        payload: data
      });

    })
    .catch((error) => {
      const { response: err } = error;
      const message = err && err.data ? err.data.message : "Erro desconhecido";

      toast.error(message, {
        duration: 5000,
      });
      dispatch({ type: cnae.GET_CNAE_FAILURE, message });
    });
};
