import React from "react";
//material-uo
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
//
import auth from "./../auth/auth-helper";
import { Link, withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#392F5A",
  },
}));

const isActive = (history, path) => {
  if (history.location.pathname == path) return { color: "#F092DD" };
  else return { color: "#ffffff" };
};

//The withRouter HOC gives us direct access to a history prop.
const Menu = withRouter(({ history }) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h6">MERCI</Typography>
        <Link to="/" className={classes.root}>
          <IconButton aria-label="Home" style={isActive(history, "/")}>
            <HomeIcon />
          </IconButton>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/users">
          <Button style={isActive(history, "/users")}>Users</Button>
        </Link>
        {!auth.isAuthenticated() && (
          <span>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/signup"
            >
              <Button style={isActive(history, "/signup")}>Sign up</Button>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/signin"
            >
              <Button style={isActive(history, "/signin")}>Sign In</Button>
            </Link>
          </span>
        )}
        {auth.isAuthenticated() && (
          <span>
            <Link to={"/user/" + auth.isAuthenticated().user._id}>
              <Button
                style={isActive(
                  history,
                  "/user/" + auth.isAuthenticated().user._id
                )}
              >
                My Profile
              </Button>
            </Link>
            <Button
              color="inherit"
              onClick={() => {
                auth.clearJWT(() => history.push("/"));
              }}
            >
              Sign out
            </Button>
          </span>
        )}
      </Toolbar>
    </AppBar>
  );
});

export default Menu;
