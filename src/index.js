import React from "react";
import ReactDOM from "react-dom";

import MainPage from "./component/MainPage";

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    React.createElement(MainPage),
    document.getElementById("mount")
  );
});
