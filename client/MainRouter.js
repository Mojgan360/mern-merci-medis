import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Menu from "./core/Menu";
import Users from "./user/Users";
import Signup from "./user/Signup";
import Signin from "./auth/Signin";
import Profile from "./user/Profile";
import PrivateRoute from "./auth/PrivateRoute";

const MainRouter = () => {
  return (
    <div>
      <Menu />
      <Route path="/users" component={Users} />
      <Route path="/signup" component={Signup} />
      <Route path="/signin" component={Signin} />
      <Route path="/user/:userId" component={Profile} />

      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};
export default MainRouter;
