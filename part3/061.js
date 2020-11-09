const str = "JavaScript";
const strObj = new String("JavaScript");
const num = 200;
const numObj = new Number(200);
const bool = true;
const boolObj = new Boolean(true);
const func = function () {};
const arr = [100, 200, 40000];
const obj = { a1: "test" };
const empty = null;
const notCalled = undefined;

console.log(typeof str);
console.log(typeof strObj); // object
console.log(typeof num);
console.log(typeof numObj); // object
console.log(typeof bool);
console.log(typeof boolObj); // object
console.log(typeof func);
console.log(typeof arr); // object
console.log(typeof obj); // object
console.log(typeof empty); // object7
console.log(typeof notCalled);
