console.log("| testNum | Pass/Fail | score | machineActive | [expectedResponse] | [response] |");
console.log("|-|-|-|-|-|-|");

let scores = [
    75, 75, 150, -1, 0,
    19, 20, 39, 40, 69,
    70, 89, 90, 100, 101,
    "75", "hola", NaN, undefined, null, true, 75.5
];

let machineStates = [
    false, true, true, true, true,
    true, true, true, true, true,
    true, true, true, true, true,
    true, true, true, true, true, true, true
];

let expectedResponses = [
    "Please switch the machine on.",
    "That's a great score, you really know your stuff.",
    "This is not possible, an error has occurred.",
    "This is not possible, an error has occurred.",
    "That was a terrible score — total fail!",
    "That was a terrible score — total fail!",
    "You know some things, but it's a pretty bad score. Needs improvement.",
    "You know some things, but it's a pretty bad score. Needs improvement.",
    "You did a passable job, not bad!",
    "You did a passable job, not bad!",
    "That's a great score, you really know your stuff.",
    "That's a great score, you really know your stuff.",
    "What an amazing score! Did you cheat? Are you for real?",
    "What an amazing score! Did you cheat? Are you for real?",
    "This is not possible, an error has occurred.",
    "That's a great score, you really know your stuff.",
    "This is not possible, an error has occurred.",
    "This is not possible, an error has occurred.",
    "This is not possible, an error has occurred.",
    "This is not possible, an error has occurred.",
    "This is not possible, an error has occurred.",
    "That's a great score, you really know your stuff."
];

let fails = 0;
let response;
let expectedResponse;
let testResult;

for (let i = 0; i < scores.length; i++) {
    response = getResponse(scores[i], machineStates[i]);
    expectedResponse = expectedResponses[i];

    if (response === expectedResponse) {
        testResult = "Pass";
    } else {
        testResult = "Fail";
        fails++;
    }

    if (testResult === "Pass") {
        console.log("| " + (i + 1) + " | " + testResult + " | " + scores[i] + " | " + machineStates[i] + " |");
    } else {
        console.log("| " + (i + 1) + " | " + testResult + " | " + scores[i] + " | " + machineStates[i] + " | " + expectedResponse + " | " + response + " |");
    }
}

console.log("");
console.log("Fails: " + fails);
