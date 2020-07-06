import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ArrowForward from "@material-ui/icons/ArrowForward";
import Person from "@material-ui/icons/Person";
import { Link } from "react-router-dom";
import { list } from "./api-user.js";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles((theme) => ({
  root: theme.mixins.gutters({
    padding: theme.spacing(1),
    margin: theme.spacing(5),
  }),
  title: {
    margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
    color: theme.palette.openTitle,
  },
}));

export default function Users() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    list(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setUsers(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, []);
  const photoUrl = users._id
    ? `/api/users/photo/${users._id}?${new Date().getTime()}`
    : "/api/users/defaultphoto";
  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={4}>
        {users.map((person, i) => {
          return (
            <GridListTile style={{ height: 120 }} key={i}>
              <Link to={"/user/" + person._id}>
                <Avatar
                  src={"/api/users/photo/" + person._id}
                  className={classes.bigAvatar}
                />
                <Typography className={classes.tileText}>
                  {person.name}
                </Typography>
              </Link>
            </GridListTile>
          );
        })}
      </GridList>
    </div>
  );
}
