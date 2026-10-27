'use strict';
// Runs every bank entry in Node and compares with the claimed answer.
const util = require('node:util');
const bank = require('./bank.js');

function run(entry) {
  const prefix = entry.strict ? "'use strict';\n" : '';
  const src = entry.body ? entry.code : `return (${entry.code});`;
  try {
    // eslint-disable-next-line no-new-func
    const fn = new Function(prefix + src);
    return util.inspect(fn(), { breakLength: Infinity });
  } catch (e) {
    return `Error:${e.name}`;
  }
}

let bad = 0;
for (const entry of bank) {
  const got = run(entry);
  if (got !== entry.exp) {
    bad++;
    console.log(`MISMATCH [${entry.t}] ${entry.code}\n  claimed: ${entry.exp}` +
      `\n  actual:  ${got}`);
  }
}
console.log(`${bank.length} entries, ${bad} mismatches`);
process.exit(bad ? 1 : 0);
