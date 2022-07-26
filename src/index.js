import React from "react";
import ReactDOM from "react-dom";
import 'jquery';
// import 'bootstrap/dist/js/bootstrap';
import 'jquery/dist/jquery.min.js';
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createBrowserHistory } from "history";
import { BrowserRouter } from "react-router-dom";

const basename = process.env.PUBLIC_URL;
const history = createBrowserHistory({ basename });

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
