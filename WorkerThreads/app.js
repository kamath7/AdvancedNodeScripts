const express = require("express");
const crypto = require("crypto");
const app = express();

const Worker = require("webworker-threads");

app.get("/", (req, res) => {
  const worker = new Worker(function () {});
  worker.onmessage = function () {};
  worker.postMessage();
});

app.get("/better", (req, res) => {
  res.send("hi");
});

app.listen(3000);
