'use strict';
// 7: table-driven. Adding a test = adding one line to CASES.
const CASES = [
  // [daysLate, isMember, expected]
  [0, false, 0],
  [1, false, 0.2],
  [7, false, 1.4],
  [8, false, 1.75],
  [30, false, 9.45],
  [31, false, 9.95],
  [42, false, 15],
  [100, false, 15],
  [10, true, 2.08],
  [-1, false, null],
  [NaN, false, null],
  ['3', false, null],
];
console.log('Unit tests of fineFor');
console.log('| n | days | member | expected | actual | ok |');
let fails = 0;
CASES.forEach(([days, member, expected], i) => {
  const actual = fineFor(days, member);
  const ok = Object.is(actual, expected);
  if (!ok) fails++;
  console.log(
    `| ${i + 1} | ${days} | ${member} | ${expected} | ${actual} | ${ok} |`);
});
console.log(`Fails: ${fails}`);
