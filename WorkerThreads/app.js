const express = require('express')
const crypto = require('crypto')
const app = express()

const Worker = require('webworker-threads')

app.get("/", (req, res) => {
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
      res.send("hi");
    });
  });

  app.get("/better", (req, res) => {
    res.send("hi");
  });

  app.listen(3000);