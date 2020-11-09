const str = "To lose your path is the way to find that path";

const sensitiveCaseRegex = /to/;
const ingnoreAllCaseRegex = /to/gi;
const findRangeRegex = /([a-f])\w+/i;
const findAllReangeRegex = /([a-f])\w+/gi;

console.log(str.match(sensitiveCaseRegex));
console.log(str.match(ingnoreAllCaseRegex));
console.log(str.match(findRangeRegex));
console.log(str.match(findAllReangeRegex));
