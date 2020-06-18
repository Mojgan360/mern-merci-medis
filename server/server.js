import express from "express";
const MongoClient = require("mongodb").MongoClient;
import config from "./../config/config";

import mongoose from "mongoose";

const app = express();

// Connection URL
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
});

//
app.get("/", (req, res) => {
  res.status(200).send(template());
});

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});

// Use connect method to connect to the server
MongoClient.connect(
  config.mongoUri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, db) => {
    console.log("Connected successfully to mongodb server");
    db.close();
  }
);
