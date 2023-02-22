const https = require("https");
const crypto = require("crypto");

const start = Date.now();

function doRequest() {
  https
    .request("https://google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(Date.now() - start);
      });
    })
    .end();
}

function doHash() {
  crypto.pbkdf2("a", "b", 10000, 512, "sha512", () => {
    console.log("hash: ", Date.now() - start);
  });
}
