import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import resultFavorites from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={resultFavorites}>
    <App />
  </Provider>
);
