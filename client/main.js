import React from "react";
import { hydrate } from "react-dom";
import App from "./App";
import { preloadReady } from "react-loadable";

window.addEventListener("load", async () => {
  await preloadReady();

  hydrate(<App />, document.getElementById("root"));
});
