import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Menu from "./core/Menu";
import Users from "./user/Users";

const MainRouter = () => {
  return (
    <div>
      <Menu />
      <Route path="/users" component={Users} />

      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};
export default MainRouter;
