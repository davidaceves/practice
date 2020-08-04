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

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  let dict = {};
  let count = 0;
  // init dict
  for (let i = 0; i < n; i++) {
    dict[ar[i]] = 0;
  }
  // if key already in dict, add 1
  for (let i = 0; i < n; i++) {
    if (ar[i] in dict) {
      dict[ar[i]] += 1;
    }
  }

  for (let value of Object.values(dict)) {
    // if the value is odd and greater than 1, subtract 1 and take the even value
    if (value % 2 !== 0 && value > 1) {
      value -= 1;
      count += value;
      // if value is even, add it to count
    } else if (value % 2 === 0) {
      count += value;
    }
  }
  // divide count to return pair count
  return count / 2;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const ar = readLine()
    .split(" ")
    .map((arTemp) => parseInt(arTemp, 10));

  let result = sockMerchant(n, ar);

  ws.write(result + "\n");

  ws.end();
}
