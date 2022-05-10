import "./index.css";

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { StateProvider } from "./providers/stateProvider";
import { GlobalReducer as globalReducer, initialState } from "./reducers";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={globalReducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
