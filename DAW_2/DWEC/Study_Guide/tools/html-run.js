'use strict';
// End-to-end check of reference/tasks/*.html and reference/ut-refactor/:
// runs every <script> of the page (inline or src) in one shared global
// scope against a stub DOM, then asserts on the paragraphs it appended.
// Run: node tools/html-run.js
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.join(__dirname, '..', 'reference');

function runPage(file, overrides = {}) {
  const dir = path.dirname(file);
  let html = fs.readFileSync(file, 'utf8');
  for (const [name, value] of Object.entries(overrides)) {
    const re = new RegExp(`(let ${name} = )[^;]+;`);
    assert.match(html, re, `no "let ${name}" in ${file}`);
    html = html.replace(re, `$1${value};`);
  }
  const body = {
    children: [], style: {},
    appendChild(c) { this.children.push(c); },
  };
  const document = {
    body,
    querySelector: (sel) => (sel === 'body' ? body : null),
    createElement: (tag) => ({ tagName: tag, textContent: '' }),
  };
  const ctx = vm.createContext({ document, console });
  const re = /<script([^>]*)>([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    const src = /src="([^"]+)"/.exec(m[1]);
    const code = src ? fs.readFileSync(path.join(dir, src[1]), 'utf8') : m[2];
    vm.runInContext(code, ctx, { filename: src ? src[1] : path.basename(file) });
  }
  return { texts: body.children.map((p) => p.textContent), body };
}

const T = (name) => path.join(ROOT, 'tasks', name);
let checks = 0;
const eq = (actual, expected, msg) => {
  assert.deepEqual(actual, expected, msg);
  checks++;
};

// math1
eq(runPage(T('math1.html')).texts, [
  'Is the finalResult 48? Yes, well done!', 'The final result is even!']);

// math2
eq(runPage(T('math2.html')).texts, [
  'Your finalResult is 4633.33', 'finalNumber is a number type. Well done!']);

// math3: "False", "True", "False"
eq(runPage(T('math3.html')).texts.map((t) => t.split(' ')[0]),
  ['False', 'True', 'False']);

// conditionals1
for (const [season, re] of [['summer', /summer/], ['winter', /winter/],
  ['autumn', /do not know/]]) {
  const { texts } = runPage(T('conditionals1.html'), { season: `'${season}'` });
  assert.match(texts[0], re);
  checks++;
}

// conditionals2: whole grid
const E = 'This is not possible, an error has occurred.';
const BAD = "You know some things, but it's a pretty bad score. " +
  'Needs improvement.';
const GREAT = "That's a great score, you really know your stuff.";
const grid = [
  ['75', true, GREAT], ['150', true, E], ['-1', true, E], ['100.5', true, E],
  ['NaN', true, E], ['undefined', true, E], ["'75'", true, E],
  ['0', true, 'That was a terrible score - total fail!'],
  ['19.5', true, 'That was a terrible score - total fail!'],
  ['20', true, BAD], ['39.9', true, BAD],
  ['40', true, 'You did a passable job, not bad!'],
  ['69.9', true, 'You did a passable job, not bad!'],
  ['70', true, GREAT], ['89.9', true, GREAT],
  ['90', true, 'What an amazing score! Did you cheat? Are you for real?'],
  ['100', true, 'What an amazing score! Did you cheat? Are you for real?'],
  ['75', false, 'Please switch the machine on.'],
];
for (const [score, active, expected] of grid) {
  const { texts } = runPage(T('conditionals2.html'),
    { score, machineActive: String(active) });
  eq(texts[1], expected, `score=${score} active=${active}`);
}

// conditionals3
eq(runPage(T('conditionals3.html')).texts,
  ['The machine is on.', 'Login successful.']);
eq(runPage(T('conditionals3.html'), { pwd: "'Cheese'" }).texts,
  ['The machine is on.', 'Login failed.']);
eq(runPage(T('conditionals3.html'), { machineActive: 'false' }).texts,
  ['The machine is off.', undefined]);

// loops3: three identical lines, newline separated, primes backwards
{
  const { texts, body } = runPage(T('loops3.html'));
  const lines = texts[0].split('\n');
  eq(lines.length, 3);
  eq(lines[0] === lines[1] && lines[1] === lines[2], true);
  assert.ok(lines[0].startsWith('499 491 487 479'));
  assert.ok(lines[0].endsWith('7 5 3 2 '));
  eq(lines[0].trim().split(' ').length, 95); // primes up to 500
  eq(body.style.whiteSpace, 'pre-line');
}

// ut-refactor: conditionals2.html uses the external getResponse()
{
  const page = path.join(ROOT, 'ut-refactor', 'conditionals2.html');
  eq(runPage(page).texts, ['Your score is 75', 'Please switch the machine on.']);
  eq(runPage(page, { machineActive: 'true' }).texts[1], GREAT);
}

// ut-refactor: uts.html output
{
  const dir = path.join(ROOT, 'ut-refactor', 'scripts', 'get-response');
  const lines = [];
  const ctx = vm.createContext({ console: { log: (s = '') => lines.push(s) } });
  for (const f of ['main.js', 'uts.js']) {
    vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), ctx);
  }
  eq(lines[0],
    '| testNum | Pass/Fail | score | machineActive | [expectedResponse] | ' +
    '[response] |');
  eq(lines[1], '|-|-|-|-|-|-|');
  eq(lines[2], '| 1 | Pass | 75 | false');
  eq(lines[lines.length - 2], '');
  eq(lines[lines.length - 1], 'Fails: 0');
}

console.log(`html-run: ${checks} checks passed`);
