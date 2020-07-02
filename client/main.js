import React from "react";
import { hydrate } from "react-dom";
import App from "./App";

//Hydrate instead of render
hydrate(<App />, document.getElementById("root"));
