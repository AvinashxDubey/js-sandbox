// Array Basics
const a = ["Apple", "Banana"];
const b = new Array("Apple", "Banana");
const c = "Apple, Banana".split(", ");
console.log(a, b, c);

console.log(a[0], a[a.length - 1], a[99]);

// Index Coercion
const years = [1999, 2000, 2001];
console.log(years["2"] === years[2]);
years["02"] = 123;
console.log(years["2"], years["02"]);

// Length + Sparse Slots
const s = [];
s.push("banana", "apple", "peach");
s[5] = "mango";
console.log(s.length, Object.keys(s), s);

s.length = 10;
console.log(s.length, Object.keys(s), s[8]);

s.length = 2;
console.log(s.length, Object.keys(s), s);

// Empty Slots vs undefined
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";

const visitForEach = [];
colors.forEach((v, i) => visitForEach.push([i, v]));
console.log(visitForEach);

const visitKeys = [];
for (const i of colors.keys()) visitKeys.push([i, colors[i]]);
console.log(visitKeys);

// Copy vs Alias vs Deep Copy
const base = [{ x: 1 }, { x: 2 }];
const shallow = base.slice();
base[0].x = 99;
console.log(base, shallow);

const alias = base;
alias.push({ x: 3 });
console.log(base, alias);

const deepJSON = JSON.parse(JSON.stringify(base));
console.log(deepJSON);

// Common String / Lookup Ops
console.log(["A", "B", "C"].join(", "));
console.log(["A", "B", "C"].indexOf("B"));
console.log(["A", "B", "C"].includes("B"));

// Add / Remove (Mutating)
const m = ["A", "B"];
m.push("C");
console.log(m);
m.pop();
console.log(m);
m.shift();
console.log(m);
m.unshift("Z");
console.log(m);

// Splice (Remove / Replace)
const sp = ["A", "B", "C", "D", "E"];
console.log(sp.splice(1, 2), sp);
console.log(sp.splice(1, 1, "X", "Y"), sp);

// Non-mutating Alternatives
const nm = ["c", "a", "b"];
console.log(nm.toReversed(), nm);
console.log(nm.toSorted(), nm);
console.log(nm.toSpliced(1, 1, "X"), nm);
console.log(nm.with(0, "Z"), nm);

// Iteration Core
const nums = [1, 2, 3, 4];
console.log(nums.map((v, idx, nums) => {
  console.log(`idx: ${idx}, ele: ${nums[idx]}`);
  return v * 2;
}));
console.log(nums.filter((v) => v % 2 === 0));
console.log(nums.find((v) => v > 2));
console.log(nums.some((v) => v % 2 === 0));
console.log(nums.every((v) => v > 0));
console.log(nums.reduce((a, v) => a + v, 0));

nums.forEach((v, i, arr) => console.log(v, i, arr.length));
for (const v of nums) console.log(v);

// thisArg (Normal vs Arrow)
const ctx = { mult: 10 };
console.log(
  [1, 2, 3].map(function (v) {
    return v * this.mult;
  }, ctx)
);
console.log([1, 2, 3].map((v) => v * ctx.mult, ctx));

// Array-like Objects
const arrayLike = { 0: "a", 1: "b", length: 2 };
console.log(Array.prototype.join.call(arrayLike, "+"));

// Mutation During Iteration
function snapshotForEach(effect) {
  const arr = ["e1", "e2", "e3", "e4"];
  arr.forEach((_, i, a) => {
    console.log(i, a.slice());
    effect(a, i);
  });
  console.log("final", arr);
}

snapshotForEach((arr, i) => {
  if (i + 1 < arr.length) arr[i + 1] += "*";
});

snapshotForEach((arr, i) => {
  if (i === 1) arr.splice(2, 0, "new");
});

snapshotForEach((arr) => {
  arr.push("new");
});
