// --- Day 1: Trebuchet?!  ---
const fs = require('fs');
// const inputPath = "./test-case.txt";
// const inputPath = "./test-case2.txt";
const inputPath = "./input.txt";

const digitMap = {
    "1": "1",
    "one": "1",
    "2": "2",
    "two": "2",
    "3": "3",
    "three": "3",
    "4": "4",
    "four": "4",
    "5": "5",
    "five": "5",
    "6": "6",
    "six": "6",
    "7": "7",
    "seven": "7",
    "8": "8",
    "eight": "8",
    "9": "9",
    "nine": "9",
};

let sum = 0;

// Read each line, add the first and last digit in the string and then add all of those...
// Part One and Part Two only differ in the regex needed.
const partOneRegex = /\d/g;
const partTwoRegex = /\d|one|two|three|four|five|six|seven|eight|nine/g;

fs.readFileSync(inputPath, 'utf-8')
    .split(/\r?\n/)
    .forEach((entry, index) =>  {
        // The input has some sneaky combined numbers in the string
        // search and replace in the source to ensure the desired result.
        // Only found the three I'm searching for in my input, but added the others here.
        // .replace("eighthree", "eightthree")
        // .replace("fiveight", "fiveeight")
        // .replace("nineight", "nineeight")
        // .replace("sevenine", "sevennine")
        // .replace("threeight", "threeeight")
        const digits = entry
            .replace("eightwo", "eighttwo")
            .replace("oneight", "oneeight")
            .replace("twone", "twoone")
            // .match(partOneRegex);
            .match(partTwoRegex);

        const first = digits[0];
        const last = digits.slice(-1)[0];
        const val = parseInt(`${digitMap[first]}${digitMap[last]}`);

        sum = sum + val;
    });

console.log(`Sum is ${sum}.`);
