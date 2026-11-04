'use strict';
// #1 main.js (initial file)

// #2 {{
// Disclaimer: the statement says "any error -> -1". I use try/catch for
// unexpected inputs (e.g. arr is null) and no array methods (only `length`
// and indexing). Strings would also "work" as arr; I do not treat that as
// an error since the statement assumes arrays.
// #5: `num` counts matches from the end (default 1). An invalid `num`
// (not an integer >= 1) is treated as an error -> -1. Disclaimer: the
// statement does not say what to do; I chose -1 to be consistent with #2.
const NOT_FOUND = -1;

const myIndex = (arr, target, num = 1) => {
  try {
    if (!Number.isInteger(num) || num < 1) return NOT_FOUND;
    let remaining = num;
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === target && --remaining === 0) return i;
    }
    return NOT_FOUND;
  } catch {
    return NOT_FOUND;
  }
};
// #2 }}

// #3 {{
// console.log(myIndex([8, 7, 8, 9], 8)); // 2 (commented as asked in #3)
// #3 }}

// #5
console.log(myIndex([8, 8, 7, 8, 8, 7, 8, 9], 8, 2)); // 4

// #3 {{
// One test = one line. The test number is written literally in each case.
// Disclaimer (#5): I added a `num` column to the header in #5 so the
// table shows the whole input (the #3 header had no `num`).
const ut = () => {
  const cases = [
    // [testNum, arr, target, num, expectedOut]  (purpose after //)
    [1, [8, 7, 8, 9], 8, undefined, 2], // #3 statement example
    // #4 {{
    [2, [], 8, undefined, -1], // empty array
    [3, [8, 7, 8, 9], 6, undefined, -1], // not found (-1, not 1!)
    [4, [5, 1, 2], 5, undefined, 0], // match at index 0 (loop reaches 0)
    [5, [1, 2, 9], 9, undefined, 2], // match at the last index
    [6, [7], 7, undefined, 0], // one-element array, found
    [7, [7], 8, undefined, -1], // one-element array, not found
    [8, ['8', 8, '8'], 8, undefined, 1], // strict: '8' !== 8
    [9, [NaN, 1], NaN, undefined, -1], // NaN !== NaN, never found
    [10, [undefined, 1], undefined, undefined, 0], // undefined as target
    [11, [null, 1], null, undefined, 0], // null as target
    [12, [8, 8, 8], 8, undefined, 2], // several matches: last one wins
    [13, null, 8, undefined, -1], // error input -> -1, no throw
    // #4 }}
    // #6 {{
    [14, [8, 8, 7, 8, 8, 7, 8, 9], 8, 2, 4], // #5 statement example
    [15, [8, 8, 7, 8, 8, 7, 8, 9], 8, 3, 3], // third from the end
    [16, [8, 8, 7, 8, 8, 7, 8, 9], 8, 5, 0], // last possible match
    [17, [8, 8, 7, 8, 8, 7, 8, 9], 8, 6, -1], // num > matches
    [18, [8, 7, 8, 9], 8, 1, 2], // explicit num = 1 equals default
    [19, [8, 7, 8, 9], 8, 0, -1], // num = 0 invalid
    [20, [8, 7, 8, 9], 8, -1, -1], // negative num invalid
    [21, [8, 7, 8, 9], 8, 1.5, -1], // non-integer num invalid
    [22, [8, 7, 8, 9], 8, '2', -1], // num as string invalid
    [23, [8, 7, 8, 9], 8, null, -1], // null does NOT trigger the default
    [24, [], 8, 2, -1], // empty array with num
    // #6 }}
  ];
  console.log('testNum | OK/KO! | arr | target | num | out | expectedOut');
  let pass = 0;
  for (const [testNum, arr, target, num, expectedOut] of cases) {
    const out = myIndex(arr, target, num);
    const ok = out === expectedOut;
    if (ok) pass++;
    console.log(
      `${testNum} | ${ok ? 'OK' : 'KO!'} | ${arr} | ${target} | ${num} | ` +
      `${out} | ${expectedOut}`);
  }
  console.log(`\nPass: ${pass}/${cases.length}`);
};
ut();
// #3 }}
