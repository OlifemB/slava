import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@redux/configureStore";
import App from "@components/app";
import ErrorBoundry from "@components/error-boundry";

import "@styles/common.scss";
import "@styles/grid.scss";

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <HashRouter>
        <App/>
      </HashRouter>
    </ErrorBoundry>
  </Provider>
  , document.getElementById("root")
);