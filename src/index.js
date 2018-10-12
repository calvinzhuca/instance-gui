import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import App2 from "./component/App2";
import "./index.css";


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    React.createElement(App2),
    document.getElementById("mount")
  );
});
