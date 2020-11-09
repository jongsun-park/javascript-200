function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  console.log(arguments instanceof Array); // false
  return total;
}

var sumOf1to3 = sum(1, 2, 3);
console.log(sumOf1to3); // 6

function testArg() {
  var newArr = Array.prototype.slice.call(arguments);
  console.log(newArr); // [ 'a', 'b' ]
  console.log(newArr.indexOf("b")); // 1
  console.log(arguments.indexOf("b")); // error
}

testArg("a", "b");
