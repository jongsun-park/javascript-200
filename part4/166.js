"use strict";

const cbFunc = (err, result) => {
  if (err && err instanceof Error) return console.error(err.message);
  if (err) return console.error(err);
  // Error 객체 인 경우 message, 아닌 경우 전달 받은 인자를 그대로 반환

  // err 인자가 없는 경우, 두번째 인자로 받은 결과를 콘솔에 출력
  console.log("에러를 반환하지 않습니다", result);
};

const asyncFunction = (isTrue, callback) => {
  const err = new Error("This is error!");
  if (isTrue) return callback(null, isTrue);
  else return callback(err);
};

asyncFunction(true, cbFunc); // 에러를 반환하지 않습니다 true
asyncFunction(false, cbFunc); // This is error!

const fs = require("fs");

try {
  const fileList = fs.readFileSync("/undefiend/");
  fileList.forEach((f) => console.log(f)); // Error: ENOENT: no such file or directory, open '/undefiend/'
} catch (err) {
  if (err) console.error(err);
}
