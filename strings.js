// creation
const s1 = "A string primitive";
const s2 = 'Also a string primitive';
const s3 = `Yet another ${s1.split(" ")[0]}`;
const sObj = new String("A String object");

// log creation
console.log(s1, s2, s3, sObj);

// character access
const char1 = "cat".charAt(1);
const char2 = "cat"[1];
const lastChar = "cat".at(-1);

// log character access
console.log(char1, char2, lastChar);

// length property
const len = "Mozilla".length;

// log length
console.log(len);

// static methods
const fromChars = String.fromCharCode(65, 66, 67);
const fromCodePts = String.fromCodePoint(0x1F600);
const rawTemplate = String.raw`Line1\nLine2`;

// log static methods
console.log(fromChars, fromCodePts, rawTemplate);

// code unit and code point
const codeUnit = "A".charCodeAt(0);
const codePoint = "𝌆".codePointAt(0);

// log code unit and code point
console.log(codeUnit, codePoint);

// concatenation
const greeting = "Hello".concat(" ", "world");

// log concatenation
console.log(greeting);

// substring search
const contains = "Mozilla".includes("zilla");
const starts = "Mozilla".startsWith("Mo");
const ends = "Mozilla".endsWith("la");
const firstIdx = "banana".indexOf("na");
const lastIdx = "banana".lastIndexOf("na");

// log substring search
console.log(contains, starts, ends, firstIdx, lastIdx);

// substring extraction
const partSlice = "Mozilla".slice(1, 4);
const partSubstr = "Mozilla".substring(1, 4);

// log substring extraction
console.log(partSlice, partSubstr);

// splitting
const parts = "a,b,c".split(",");

// log splitting
console.log(parts);

// padding and repeating
const padStart = "5".padStart(3, "0");
const padEnd = "5".padEnd(3, "0");
const laugh = "ha".repeat(3);

// log padding and repeating
console.log(padStart, padEnd, laugh);

// replacement
const replacedOnce = "foo bar foo".replace("foo", "baz");
const replacedAll = "foo bar foo".replaceAll("foo", "baz");

// log replacement
console.log(replacedOnce, replacedAll);

// pattern matching
const firstMatch = "test1test2".match(/\d+/);
const allMatches = [..."test1test2".matchAll(/\d+/g)];

// log pattern matching
console.log(firstMatch, allMatches);

// search (regex)
const searchIdx = "hello".search(/ll/);

// log search
console.log(searchIdx);

// locale comparison
const cmp = "b".localeCompare("a");

// log locale comparison
console.log(cmp);

// case conversion
const lower = "Hello".toLowerCase();
const upper = "Hello".toUpperCase();

// log case conversion
console.log(lower, upper);

// trimming
const trimmed = "  trimmed  ".trim();
const trimmedStart = "  trimmed  ".trimStart();
const trimmedEnd = "  trimmed  ".trimEnd();

// log trimming
console.log(trimmed, trimmedStart, trimmedEnd);

// conversion to primitive
const prim = sObj.valueOf();
const strVal = sObj.toString();

// log conversion
console.log(prim, strVal);

// iteration over code points
for (const ch of "abc") {
  console.log(ch);
}

