import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { StateProvider } from "./providers/stateProvider";
import { GlobalReducer as globalReducer, initialState } from "./reducers";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider
      initialState={initialState}
      reducer={globalReducer}
    >
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
