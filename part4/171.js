"use strict";

const fs = require("fs");
const path = require("path");

const fileName = "hello.txt";
const targetPath = path.join(__dirname, "js200");

const filePath = path.join(targetPath, fileName);
console.log(path.parse(filePath));
// {
//    root: 'c:\\',
//    dir: 'c:\\Users\\jongs\\OneDrive\\문서\\JavaScript200\\part4\\js200',
//    base: 'hello.txt',
//    ext: '.txt',
//    name: 'hello'
// }

const isFileInPath = (path, fileName, callback) => {
  fs.readdir(path, (err, files) => {
    if (err) return callback(err);
    let isHere = false;
    files.forEach((f) => {
      if (f === fileName) isHere = true;
    });
    return callback(null, isHere);
  });
};

isFileInPath(path.join(__dirname, "js200"), fileName, (err, isTrue) => {
  if (err || !isTrue) return console.log("파일을 읽을 수 없습니다.");

  fs.stat(filePath, (err, fileInfo) => {
    if (err) console.log(err);
    return console.log(fileInfo);
  });
});

// Stats {
//     dev: 2691960246,
//     mode: 33206,
//     nlink: 1,
//     uid: 0,
//     gid: 0,
//     rdev: 0,
//     blksize: 4096,
//     ino: 2533274790451168,
//     size: 33,
//     blocks: 0,
//     atimeMs: 1605128545219.7302,
//     mtimeMs: 1605128540766.2664,
//     ctimeMs: 1605128540766.2664,
//     birthtimeMs: 1605128528661.069,
//     atime: 2020-11-11T21:02:25.220Z,
//     mtime: 2020-11-11T21:02:20.766Z,
//     ctime: 2020-11-11T21:02:20.766Z,
//     birthtime: 2020-11-11T21:02:08.661Z
// }
