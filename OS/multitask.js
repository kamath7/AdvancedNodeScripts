const https = require("https");
const crypto = require("crypto");
const fs = require("fs");

const start = Date.now();

function doRequest() {
  https
    .request("https://google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log("HTTPS:",Date.now() - start);
      });
    })
    .end();
}

function doHash() {
  crypto.pbkdf2("a", "b", 10000, 512, "sha512", () => {
    console.log("hash: ", Date.now() - start);
  });
}

doRequest();
doHash();
doHash();
doHash();
fs.readFile("multitask.js", "utf8", () => {
  console.log("FS", Date.now() - start);
});
