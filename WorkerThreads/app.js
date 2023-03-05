const express = require("express");
const crypto = require("crypto");
const app = express();

const Worker = require("webworker-threads");

app.get("/", (req, res) => {
  const worker = new Worker(function () {
    this.onmessage = function () {
      //simulating a stress test
      let counter = 0;
      while (counter < 1e9) {
        counter++;
      }
      postMessage(counter);
    };
  });
  worker.onmessage = function () {};
  worker.postMessage();
});

app.get("/better", (req, res) => {
  res.send("hi");
});

app.listen(3000);
