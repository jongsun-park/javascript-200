const set = new Set();

set.add("one");
set.add("two");
set.add("three");

const keys = set.keys();
const values = set.values();
const entries = set.entries();

console.log(keys.next().value);
console.log(values.next().value);
console.log(entries.next().value);

console.log(keys);
console.log(values);
console.log(entries);
