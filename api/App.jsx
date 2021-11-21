import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Pay from "./Pay";
import Success from "./Success";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/pay">
          <Pay />
        </Route>
        <Router path="/success">
          <Success />
        </Router>
      </Switch>
    </Router>
  );
};

export default App;
