import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProviderContainer } from "./components/useContext/provider";

ReactDOM.render(
  <React.StrictMode>
    <ProviderContainer>
      <App />
    </ProviderContainer>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
