'use strict';

// Each test: [score, machineActive, expectedResponse]
const tests = [
  [75, false, 'Please switch the machine on.'],
  [75, true, "That's a great score, you really know your stuff."],
  [150, true, 'This is not possible, an error has occurred.'],
  [-1, true, 'This is not possible, an error has occurred.'],
  [100.5, true, 'This is not possible, an error has occurred.'],
  [NaN, true, 'This is not possible, an error has occurred.'],
  [0, true, 'That was a terrible score - total fail!'],
  [19.5, true, 'That was a terrible score - total fail!'],
  [20, true,
    "You know some things, but it's a pretty bad score. Needs improvement."],
  [39.9, true,
    "You know some things, but it's a pretty bad score. Needs improvement."],
  [40, true, 'You did a passable job, not bad!'],
  [69.9, true, 'You did a passable job, not bad!'],
  [70, true, "That's a great score, you really know your stuff."],
  [89.9, true, "That's a great score, you really know your stuff."],
  [90, true, 'What an amazing score! Did you cheat? Are you for real?'],
  [100, true, 'What an amazing score! Did you cheat? Are you for real?'],
];

function uts() {
  console.log('| testNum | Pass/Fail | score | machineActive | ' +
    '[expectedResponse] | [response] |');
  console.log('|-|-|-|-|-|-|');
  let fails = 0;
  tests.forEach(([score, machineActive, expected], index) => {
    const response = getResponse(score, machineActive);
    const pass = response === expected;
    const start = `| ${index + 1} | ${pass ? 'Pass' : 'Fail'} | ${score} | ` +
      `${machineActive}`;
    if (pass) {
      console.log(start);
    } else {
      fails++;
      console.log(`${start} | ${expected} | ${response} |`);
    }
  });
  console.log('');
  console.log(`Fails: ${fails}`);
}

uts();
