const express = require("express");
const cluster = require("cluster");
const crypto = require("crypto");

  const app = express();

  app.get("/", (req, res) => {
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
      res.send("hi");
    });
  });

  app.get("/better", (req, res) => {
    res.send("hi");
  });

  app.listen(3000);


//create a node function that adds two numbers
