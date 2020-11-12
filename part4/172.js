"use strict";

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "js200", "hello.txt");

fs.open(filePath, "r", (err, fd) => {
  if (err && err.code === "ENOENT")
    return console.log("읽을 수 없는 파일 입니다.");
  if (err) return console.log(err);
  console.log("읽을 수 있는 파일 입니다.");

  //   비동기
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) return console.log(err);
    console.log(data);
  });

  //   동기
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
});
