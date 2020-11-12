"use strict";

const fs = require("fs");
const path = require("path");

const makeFile = (path, callback) => {
  fs.writeFile(path, `New file, New content`, `utf8`, (err) => {
    if (err) return callback(err);
    console.log("파일이 생성됐습니다.");
    return callback(null);
  });
};

const appendFile = (path, callback) => {
  fs.appendFile(path, "\nUpdate File", (err) => {
    if (err) return callback(err);
    console.log("파일 내용을 추가합니다.");
    callback(null);
  });
};

const printErrIfExist = (err) => {
  if (err) console.log(err);
};

const filePath = path.join(__dirname, "js200", "hello.txt");

fs.open(filePath, "wx", (err, fd) => {
  if (err && err.code === "EEXIST")
    return appendFile(filePath, (err) => printErrIfExist(err));
  if (err) return printErrIfExist(err);
  return makeFile(filePath, (err) => printErrIfExist(err));
});
