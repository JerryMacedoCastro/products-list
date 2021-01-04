import { Route, Switch } from "react-router-dom";
import Contact from "./Components/Contact";
import Products from "./Components/Products";
import "./App.css";

import React from "react";

const Routes = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default Routes;
