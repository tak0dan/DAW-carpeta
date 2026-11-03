'use strict';
// Shared by verify.js and gen.js: run a bank entry (or an override of its
// code) and return util.inspect(result) or "Error:<Name>".
const util = require('node:util');

function run(entry, code = entry.code) {
  const prefix = entry.strict ? "'use strict';\n" : '';
  const src = entry.body ? code : `return (${code});`;
  try {
    // eslint-disable-next-line no-new-func
    const fn = new Function(prefix + src);
    return util.inspect(fn(), { breakLength: Infinity });
  } catch (e) {
    return `Error:${e.name}`;
  }
}

module.exports = { run };
