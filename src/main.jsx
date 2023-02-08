import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";

// PROVIDERS
import store from "./store/index";
import SearchProvider from "./context/SearchContext";

// STYLES
import { Toaster } from "react-hot-toast";
import "./assets/css/style.css";
import "./charts/ChartjsConfig";
import "moment/locale/pt-br";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <SearchProvider>
        <BrowserRouter>
          <Toaster/>
          <App />
        </BrowserRouter>
      </SearchProvider>
    </Provider>
  </React.StrictMode>
);
