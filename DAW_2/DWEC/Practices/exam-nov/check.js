'use strict';
// Verifies every code-based claim of Part B of EXAM.md against real JS.
// Run: node check.js   (prints MISMATCH lines; ends with "all ok" if none)
const run = (code) => {
  try { return new Function(`${code}`)(); } catch (e) { return `Error:${e.name}`; }
};
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
let bad = 0;
const chk = (id, code, expected) => {
  const got = run(code);
  if (!same(got, expected)) {
    bad++;
    console.log(`MISMATCH ${id}: got ${JSON.stringify(got)}, ` +
      `expected ${JSON.stringify(expected)}`);
  }
};
// --- V/F (expected = the truth value of the CLAIM as written in EXAM.md)
chk('VF1', "let a=1; 'use strict'; b=2; return b;", 2); // sloppy: no error
chk('VF2', 'eval("let a; let a;")', 'Error:SyntaxError');
chk('VF3', 'return typeof null', 'object');
chk('VF4', 'return "6" / "2"', 3);
chk('VF5', 'return [+"", +" 12 "]', [0, 12]);
chk('VF6', 'return [parseInt("12px"), Number("12px")]', [12, null]);
chk('VF7', 'return Number.isNaN("abc")', false);
chk('VF8', 'return NaN !== NaN', true);
chk('VF9', 'return [null == 0, null >= 0]', [false, true]);
chk('VF10', 'return "" ?? "x"', '');
chk('VF11', 'eval("0 || null ?? 1")', 'Error:SyntaxError');
chk('VF12', 'return [1 && 0 && 2, 1 && 2]', [0, 2]);
chk('VF13', 'return "B" < "a"', true);
chk('VF14', 'let x; if (x = 3) {} return x', 3);
chk('VF15', 'switch (9) { case 1: return "a"; } return "none"', 'none');
chk('VF16', '"use strict"; for (let i=0;i<3;i++){} return typeof i',
  'undefined'); // typeof does not throw; a plain read does:
chk('VF16b', '"use strict"; for (let i=0;i<3;i++){} return i',
  'Error:ReferenceError');
chk('VF17', 'eval("const x;")', 'Error:SyntaxError');
chk('VF18', 'return (() => ({a: 1}))().a', 1);
chk('VF19', 'f(); const f = function () {};', 'Error:ReferenceError');
chk('VF20', 'return typeof (12.34).toFixed(1)', 'string');
chk('VF21', 'return Math.round(-2.5)', -2);
chk('VF22', 'const a=[1]; a[5]=1; return a.length', 6);
chk('VF23', 'return [10,9,1].sort()', [1, 10, 9]);
chk('VF24', 'const a=[1,2,3]; const r=a.splice(1,1); return [a, r]',
  [[1, 3], [2]]);
// --- Gaps
chk('G26', 'return [Number(""), Number("a"), Number(true)]', [0, null, 1]);
chk('G27', 'return ["3"*"4", "3"+"4", 3+4+"5"]', [12, '34', '75']);
chk('G28', 'return [10 % 4, 2 ** 3 ** 2, -7 % 3]', [2, 512, -1]);
chk('G30', 'return [(7).toFixed(2), parseFloat("3.14abc")]', ['7.00', 3.14]);
chk('G31', 'return [Math.max(), Math.min()]', [null, null]); // +-Infinity
chk('G32', 'return [[1,2,3].at(-1), [1,2,3].indexOf(4), [1,2,3].includes(2)]',
  [3, -1, true]);
chk('G34', 'let x = 1; x += x++ + ++x; return x', 5);
chk('G35', 'let n = 0; do { n++; } while (false); return n', 1);
chk('G36', 'return `${1}${"a"}${[1,2]}`', '1a1,2');
chk('S42', 'const ok = (x) => Number.isInteger(x) && x >= 0;' +
  'return [ok(3), ok("3"), ok(1.5), ok(NaN), ok(-1), ok(0)]',
[true, false, false, false, false, true]);
console.log(bad ? `${bad} mismatches` : 'all ok');
