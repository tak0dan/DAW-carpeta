'use strict';
// Builds ../09-drills.md from bank.js. Run verify.js first.
const fs = require('node:fs');
const path = require('node:path');
const bank = require('./bank.js');

const titles = {
  typeof: 'typeof', numbers: 'Numbers', conversion: 'Type conversions',
  boolean: 'Truthy / falsy', equality: 'Comparisons and equality',
  operators: 'Operators, precedence, assignment', logical: '&&  ||  ??  !',
  ternary: 'Conditional (ternary) operator', strings: 'Strings and literals',
  variables: 'Variables, const, scope, strict mode', asi: 'Semicolons (ASI)',
  functions: 'Functions', loops: 'Loops', switch: 'switch',
};

const fence = (s) => '```js\n' + s.replace(/\\n/g, '\n') + '\n```';

let out = '# 09 - Drills: "what does this print?"\n\n' +
  'Every answer below was **executed in Node ' + process.version +
  '** (`node tools/verify.js`), none comes from memory.\n\n' +
  'How to use: read the snippet, commit to an answer ON PAPER, then open ' +
  'the answer. Snippets marked *(strict)* run under `"use strict"`. ' +
  '`Error:X` means "throws X". Snippets that are function bodies are ' +
  'shown as such.\n\n';

const topics = [...new Set(bank.map((b) => b.t))];
let n = 0;
for (const t of topics) {
  out += `## ${titles[t] || t}\n\n`;
  for (const e of bank.filter((b) => b.t === t)) {
    n++;
    const code = e.body ? e.code.replace(/; /g, ';\n') : e.code;
    out += `**${n}.**${e.strict ? ' *(strict)*' : ''}\n\n` +
      fence(e.body ? `// function body\n${code}` : code) + '\n' +
      `<details><summary>Answer</summary>\n\n` +
      `\`${e.exp}\` - ${e.why}\n\n</details>\n\n`;
  }
}
fs.writeFileSync(path.join(__dirname, '..', '09-drills.md'), out);
console.log(`wrote ${n} drills`);
