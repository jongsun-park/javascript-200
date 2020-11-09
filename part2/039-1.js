var a = "global";

function print1() {
  console.log(a);
}

print1();

function print2() {
  var a = "local";
  //   print1();
  console.log(a);
}

print2();
