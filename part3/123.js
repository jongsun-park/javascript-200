const str = "javascript";
const items = str.split("");
// console.log(items);
const seq = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        const value = items[i];
        i++;
        const done = i > items.length;
        return { value, done };
      },
    };
  },
};

for (let s of seq) console.log(s);
const [a, b, c, ...arr] = seq;
console.log("a >>> ", a);
console.log("b >>> ", b);
console.log("c >>> ", c);
console.log("arr >>> ", arr);
