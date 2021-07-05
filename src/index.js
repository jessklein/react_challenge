import React from "react";
import ReactDOM from "react-dom";

import GetCars from "./GetCars";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <GetCars />
  </React.StrictMode>,
  rootElement
);

