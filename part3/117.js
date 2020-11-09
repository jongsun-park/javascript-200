const jsonStr = `{"drama":"PET","season":2017,"casting":["koyuki","matsumoto jun"],"character":["sumire","momo"]}`;

console.log(JSON.parse(jsonStr));
console.log(JSON.parse(jsonStr), (key, val) => {
  if (key === "seaseon") val = 2003;
  return val;
});
