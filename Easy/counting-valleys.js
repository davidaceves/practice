"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the countingValleys function below.
function countingValleys(n, s) {
  // if altitude = 0, you are at sea level
  // if altitude is negative you are in a valley

  let altitude = 0;
  let valleys = 0;

  for (let i = 0; i < n; i++) {
    if (s[i] === "U") {
      altitude += 1;
    } else if (s[i] === "D") {
      altitude -= 1;
    }
    // if altitude is -1 and the next step is up, you are leaving a valley
    if (altitude === -1 && s[i + 1] === "U") {
      valleys += 1;
    }
  }

  return valleys;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const s = readLine();

  let result = countingValleys(n, s);

  ws.write(result + "\n");

  ws.end();
}
