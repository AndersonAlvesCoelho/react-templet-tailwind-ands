import { devices } from "../typesActions/types";

import api from "../../services/api";
import toast from "react-hot-toast";

export const getDevices = (brand) => (dispatch) => {
  dispatch({ type: devices.GET_DEVICES_REQUEST });
  api
    .get(`/devices?brand=${brand}`)
    .then((res) => {
      const { data } = res;
      const result = data ? data : []
      dispatch({
        type: devices.GET_DEVICES_SUCCESS,
        payload: {
          data: result
        },
      });

    })
    .catch((error) => {
      const { response: err } = error;
      const message = err && err.data ? err.data.message : "Erro desconhecido";

      toast.error(message, {
        duration: 5000,
      });
      dispatch({ type: devices.GET_DEVICES_FAILURE, message });
    });
};
