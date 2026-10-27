'use strict';
// Reference logic for the MDN tasks + hostile tests ("as a crazy programmer").
// Run: node tasks-check.js
const assert = require('node:assert/strict');

// ------------------------------------------------------------- math1
{
  const a = 3, b = 5, c = 10, d = 4;
  const sumFirstTwo = a + b;
  const diffLastTwo = c - d;
  const finalResult = sumFirstTwo * diffLastTwo;
  // The template tests `evenOddResult === 0`: store the REMAINDER.
  const evenOddResult = finalResult % 2;
  assert.equal(finalResult, 48);
  assert.equal(evenOddResult === 0, true);
  // The tempting wrong answer: a boolean never equals 0.
  assert.equal((finalResult % 2 === 0) === 0, false);
}

// ------------------------------------------------------------- math2
{
  let result = 7 + 13 / 9 + 7;
  const result2 = 100 / 2 * 6;
  result *= result2;
  const finalResult = result.toFixed(2);
  let finalNumber;
  if (typeof finalResult === 'string') {
    finalNumber = Number(finalResult);
  }
  assert.equal(typeof finalResult, 'string');
  assert.equal(finalNumber, 4633.33);
}

// ------------------------------------------------------------- math3
{
  const eleWeight = 1000, mouseWeight = 2;
  const ostrichHeight = 2, duckHeight = 0.3;
  const pwd1 = 'stromboli', pwd2 = 'stROmBoLi';
  assert.equal(eleWeight < mouseWeight, false);
  assert.equal(ostrichHeight > duckHeight, true);
  assert.equal(pwd1 === pwd2, false);
}

// ------------------------------------------------------------- conditionals1
function season1(season) {
  let response;
  if (season === 'summer') {
    response = 'It is summer: sunny and hot!';
  } else if (season === 'winter') {
    response = 'It is winter: cold, take a coat.';
  } else {
    response = 'I do not know what season it is.';
  }
  return response;
}
assert.match(season1('summer'), /summer/);
assert.match(season1('winter'), /winter/);
assert.match(season1('autumn'), /do not know/);
// Classic bug: two independent ifs. The second else overwrites the first.
function season1Bug(season) {
  let response;
  if (season === 'summer') response = 'summer!';
  else response = 'unknown';
  if (season === 'winter') response = 'winter!';
  else response = 'unknown';
  return response;
}
assert.equal(season1Bug('summer'), 'unknown'); // summer message lost

// ------------------------------------------------------------- conditionals2
// Robust version: only upper bounds, ascending, so no gaps for 19.5, 39.5...
function getResponse(score, machineActive) {
  if (!machineActive) {
    return 'Please switch the machine on.';
  }
  if (typeof score !== 'number' || Number.isNaN(score) ||
      score < 0 || score > 100) {
    return 'This is not possible, an error has occurred.';
  }
  if (score < 20) return 'That was a terrible score - total fail!';
  if (score < 40) {
    return "You know some things, but it's a pretty bad score. " +
      'Needs improvement.';
  }
  if (score < 70) return 'You did a passable job, not bad!';
  if (score < 90) {
    return "That's a great score, you really know your stuff.";
  }
  return 'What an amazing score! Did you cheat? Are you for real?';
}
{
  const E = 'This is not possible, an error has occurred.';
  const cases = [
    [75, false, 'Please switch the machine on.'],
    [75, true, "That's a great score, you really know your stuff."],
    [150, true, E], [-1, true, E], [100.5, true, E], [Infinity, true, E],
    [NaN, true, E], [undefined, true, E], [null, true, E], ['75', true, E],
    [0, true, 'That was a terrible score - total fail!'],
    [19.5, true, 'That was a terrible score - total fail!'],
    [20, true, "You know some things, but it's a pretty bad score. " +
      'Needs improvement.'],
    [39.9, true, "You know some things, but it's a pretty bad score. " +
      'Needs improvement.'],
    [40, true, 'You did a passable job, not bad!'],
    [69.99, true, 'You did a passable job, not bad!'],
    [70, true, "That's a great score, you really know your stuff."],
    [89.5, true, "That's a great score, you really know your stuff."],
    [90, true, 'What an amazing score! Did you cheat? Are you for real?'],
    [100, true, 'What an amazing score! Did you cheat? Are you for real?'],
  ];
  for (const [score, active, expected] of cases) {
    assert.equal(getResponse(score, active), expected,
      `score=${String(score)} active=${active}`);
  }
}

// prompt() returns a string or null: the call site must convert.
// Number(null) === 0 (cancelled looks like a terrible score!),
// Number('') === 0, Number('abc') is NaN.
assert.equal(Number(null), 0);
assert.equal(Number(''), 0);
assert.ok(Number.isNaN(Number('abc')));

// The "gap" bug: closed intervals on integers only.
function gappy(score) {
  if (score >= 0 && score <= 19) return 'low';
  else if (score >= 20 && score <= 39) return 'mid';
  else return 'amazing (final else!)';
}
assert.equal(gappy(19.5), 'amazing (final else!)');

// Ternary version (#7/#8): same behaviour, single expression.
const getResponseTernary = (score, machineActive) =>
  !machineActive ? 'Please switch the machine on.'
    : (typeof score !== 'number' || Number.isNaN(score) ||
        score < 0 || score > 100)
      ? 'This is not possible, an error has occurred.'
      : score < 20 ? 'That was a terrible score - total fail!'
        : score < 40 ? "You know some things, but it's a pretty bad score. " +
          'Needs improvement.'
          : score < 70 ? 'You did a passable job, not bad!'
            : score < 90 ? "That's a great score, you really know your stuff."
              : 'What an amazing score! Did you cheat? Are you for real?';
for (const s of [-1, 0, 19.5, 20, 39.9, 40, 69.9, 70, 89.9, 90, 100, 101,
  NaN, '5', null]) {
  for (const m of [true, false, 0, 'false']) {
    assert.equal(getResponseTernary(s, m), getResponse(s, m));
  }
}

// switch(true) hack (#9): works only because case expressions are booleans
// compared with === against `true`.
function getResponseSwitch(score, machineActive) {
  if (!machineActive) return 'Please switch the machine on.';
  switch (true) {
    case typeof score !== 'number' || Number.isNaN(score) ||
        score < 0 || score > 100:
      return 'This is not possible, an error has occurred.';
    case score < 20: return 'That was a terrible score - total fail!';
    case score < 40:
      return "You know some things, but it's a pretty bad score. " +
        'Needs improvement.';
    case score < 70: return 'You did a passable job, not bad!';
    case score < 90:
      return "That's a great score, you really know your stuff.";
    default:
      return 'What an amazing score! Did you cheat? Are you for real?';
  }
}
for (const s of [-1, 0, 19.5, 20, 39.9, 40, 69.9, 70, 89.9, 90, 100, 101,
  NaN, '5', null]) {
  assert.equal(getResponseSwitch(s, true), getResponse(s, true));
}

// "machineActive" as string 'false' is truthy: documents the trap.
assert.equal(getResponse(75, 'false').startsWith('That'), true);

// ------------------------------------------------------------- conditionals3
{
  const machineActive = true;
  const pwd = 'cheese';
  const machineResult = machineActive ? 'The machine is on.'
    : 'The machine is off.';
  let pwdResult;
  if (machineActive) {
    pwdResult = pwd === 'cheese' ? 'Login successful.' : 'Login failed.';
  }
  assert.equal(machineResult, 'The machine is on.');
  assert.equal(pwdResult, 'Login successful.');
  // `if (pwd = 'cheese')` would ASSIGN and always be truthy.
}

// ------------------------------------------------------------- loops3
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function loops() {
  let i = 500;
  let text = '';
  // 1) while
  while (i >= 2) {
    if (!isPrime(i)) {
      i--; // MUST happen before continue, or infinite loop
      continue;
    }
    text += i + ' ';
    i--;
  }
  text += '\n';
  // 2) do..while (reset the global counter!)
  i = 500;
  do {
    if (isPrime(i)) text += i + ' ';
    i--;
  } while (i >= 2);
  text += '\n';
  // 3) for
  for (i = 500; i >= 2; i--) {
    if (!isPrime(i)) continue; // the for step still runs
    text += i + ' ';
  }
  return text;
}
{
  const lines = loops().split('\n');
  assert.equal(lines.length, 3);
  assert.equal(lines[0], lines[1]);
  assert.equal(lines[1], lines[2]);
  assert.ok(lines[0].startsWith('499 491 487'));
  assert.ok(lines[0].endsWith('5 3 2 '));
  assert.equal(isPrime(1), true); // why we start at 2
  assert.equal(isPrime(0), true);
}

console.log('tasks-check: all assertions passed');
