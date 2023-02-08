import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import authReducer from "./reducers/auth";
import cnaeReducer from "./reducers/cnae";
import cnpjReducer from "./reducers/cnpj";


const middleware = [thunk];

const allReducers = combineReducers({
  auth: authReducer,
  cnae: cnaeReducer,
  cnpj: cnpjReducer,
});

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
