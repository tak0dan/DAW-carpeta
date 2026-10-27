'use strict';

// Returns the message for a game score. The answer machine must be on.
// (Single global function: loaded by a <script src> before use.)
function getResponse(score, machineActive) {
  if (!machineActive) {
    return 'Please switch the machine on.';
  }
  // Anything that is not a real number in [0, 100] is an error. `typeof`
  // is needed because prompt() gives strings/null, and NaN fails every
  // comparison.
  if (typeof score !== 'number' || Number.isNaN(score) ||
      score < 0 || score > 100) {
    return 'This is not possible, an error has occurred.';
  }
  // Only upper bounds, ascending: no gaps for 19.5, 39.9, ...
  if (score < 20) {
    return 'That was a terrible score - total fail!';
  } else if (score < 40) {
    return "You know some things, but it's a pretty bad score. " +
      'Needs improvement.';
  } else if (score < 70) {
    return 'You did a passable job, not bad!';
  } else if (score < 90) {
    return "That's a great score, you really know your stuff.";
  }
  return 'What an amazing score! Did you cheat? Are you for real?';
}
