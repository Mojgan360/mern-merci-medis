const path = require("path");
import express from "express";
const MongoClient = require("mongodb").MongoClient;
import config from "./../config/config";
import template from "./../template";
//comment out before building for production
//import devBundle from "./devBundle";

const app = express();
//comment out before building for production
//devBundle.compile(app);

const CURRENT_WORKING_DIR = process.cwd();
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

app.get("/", (req, res) => {
  res.status(200).send(template());
});

let port = process.env.PORT || 3000;
app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});
// Database Connection URL
const url =
  process.env.MONGODB_URI ||
  "mongodb+srv://merciapp:tomas@cluster0-f2afz.mongodb.net/merciapp?retryWrites=true&w=majority";

// Use connect method to connect to the server
MongoClient.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, db) => {
    console.log("Connected successfully to mongodb server");
    db.close();
  }
);
