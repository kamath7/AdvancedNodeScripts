const express = require("express");
const cluster = require("cluster");
const crypto = require("crypto");

console.log(cluster.isMaster); //true.

if (cluster.isMaster) {
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
  //will execute index.js in child mode
} else {
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
}

//create a node function that adds two numbers
