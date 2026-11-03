'use strict';
// Runs every bank entry in Node and compares with the claimed answer.
const bank = require('./bank.js');
const { run } = require('./runner.js');

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
