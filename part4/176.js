"use strict";

const http = require("http");
const url = require("url");

const hostname = "127.0.0.1"; // localhost
const port = 3000;

const server = http.createServer((req, res) => {
  switch (req.method) {
    case "GET":
      if (req.url === "/") {
        req.setHeader("Content-type", "text/plain");
        req.writeHead(200);
        req.end("Hello Node.js HTTP Server");
      } else if (req.url.substring(0, 5) === "/data") {
        const queryParams = url.parse(req.url, true).query;

        res.setHeader("Content-type", "text/html");
        res.writeHead(200);
        res.write(`<html><head><title>Javascript 200제</title></head>`);

        for (let key in queryParams) {
          res.write(`<h1>${key}</h1>`);
          res.write(`<h2>${queryParams[key]}</h2>`);
        }

        res.end("</body></html>");
      }
      break;
    default:
      res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
