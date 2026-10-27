'use strict';
// Verifies the code-reading answers of 12-mock-exam.md (Part A).
const util = require('node:util');
const A = [
  ['typeof typeof null + typeof NaN', "'stringnumber'"],
  ['let x = "5"; return x + 1 - 1;', '50'],
  ['return `${1 + 1}${"1" + 1}${+"1" + 1}`;', "'2112'"],
  ['return null ?? undefined ?? 0 || "z";', 'Error:SyntaxError'],
  ['const o = [1, 2]; const p = o; p.length = 0; return o;', '[]'],
  ['function f(a, b = a + 1, c = b * 2) { return [a, b, c]; } ' +
    'return f(1, undefined, null);', '[ 1, 2, null ]'],
  ['let n = 0; for (let i = 0; i < 5; i++) { if (i % 2 === 0) continue; ' +
    'n += i; } return n;', '4'],
  ['let a = 1; { let a = 2; } return a;', '1'],
  ['return !!"0" + !![] + !!{} + !!NaN + !!null;', '3'],
  ['let a = 2, b = 3; return a + b * a ** 2 % b;', '2'],
  ['let i = 0; return i++ + i++ * ++i;', '3'],
  ['function f(x) { switch (x) { case 1: return "one"; case "1": ' +
    'return "str"; } return "none"; } return [f(1), f("1"), f(true)];',
  "[ 'one', 'str', 'none' ]"],
  ['let s = 0; for (let i = 10; i > 0; i -= 3) s += i; return s;', '22'],
  ['let c = 0; do { c++; } while (c < 3 && c !== 2); return c;', '2'],
  ['return [1 < 2 < 3, 3 > 2 > 1, "10" > "9", 10 > "9", null >= 0, ' +
    'undefined == null];', '[ true, false, false, true, true, true ]'],
  ['let r; function g() { r = "set"; } const v = g(); return [r, v];',
    "[ 'set', undefined ]"],
  ['const h = () => { v: 1 }; return h();', 'undefined'],
  ['return (() => { return\n42; })();', 'undefined'],
  ['let t = "x"; t += 1 + 2; t += "1" + 2; return t;', "'x312'"],
  ['return [typeof null, typeof undefined, typeof (() => 1), ' +
    'typeof class {}, typeof 1n];',
  "[ 'object', 'undefined', 'function', 'function', 'bigint' ]"],
];
let bad = 0;
for (const [code, exp] of A) {
  const src = /^\s*(let|const|function|return)/.test(code) ? code :
    `return (${code});`;
  let got;
  try { got = util.inspect(new Function("'use strict';\n" + src)(),
    { breakLength: Infinity }); } catch (e) { got = `Error:${e.name}`; }
  if (got !== exp) { bad++; console.log('MISMATCH', code, exp, got); }
}
console.log(`${A.length} mock answers, ${bad} mismatches`);
