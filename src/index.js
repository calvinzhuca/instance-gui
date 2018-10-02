import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "./index.css";


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    React.createElement(App),
    document.getElementById("mount")
  );
});


