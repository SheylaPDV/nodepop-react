import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import App from "./App";
import storage from "./utils/storage";
import { setAuthorizationHeader } from "./api/client";

const accessToken = storage.get("auth");
setAuthorizationHeader(accessToken);

ReactDOM.render(
  <React.StrictMode>
    <App isInitiallLogged={!accessToken} />
  </React.StrictMode>,
  document.getElementById("root")
);
