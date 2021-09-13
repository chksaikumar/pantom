import React from "react";

import HomePage from "./pages/Homepage";
import App1 from "./Phantom/App1";
import Modle from "./
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        {/* <Switch>
        <Route path="/" exact component={HomePage} />
          <Route path="/connect" component={App1} />
        </Switch> */}
        <HomePage />
        <App1 />
      </div>
    </Router>
  );
}
