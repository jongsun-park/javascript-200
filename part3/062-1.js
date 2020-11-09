function verifyNumber(n) {
  if (!n || Number.isNaN(n)) return 0;
  return n;
}

const n1 = verifyNumber(15);
const n2 = verifyNumber(undefined);
const n3 = verifyNumber(null);
const n4 = verifyNumber(NaN);
console.log(n1 + n2 + n3 + n4);
