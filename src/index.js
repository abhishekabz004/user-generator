import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import MainReducer from "./reducers/MainReducer";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import './index.css'

const store = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(MainReducer);

//Provider is for binding the redux store to this app so that it can be accessed by all the further child components.
ReactDOM.render(
  <Provider store={store}>  
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
