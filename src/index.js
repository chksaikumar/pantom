import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import App1 from "./Phantom/App1";
import App from "./App";
// import HomePage from './pages/Homepage'
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
