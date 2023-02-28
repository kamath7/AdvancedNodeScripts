const express = require("express");
const cluster = require("cluster");

console.log(cluster.isMaster); //true.
const app = express();

function playingWithCPU(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {
    //infinite loop
  }
}

app.get("/", (req, res) => {
  playingWithCPU(5000);
  res.send("hi");
});

app.listen(3000);
