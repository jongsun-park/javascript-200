let value = "바깥값";

if (true) {
  // Cannot access 'value' before initialization
  console.log(value);
  let value = "안쪽값";
}
