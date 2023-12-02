// --- Day 1: Trebuchet?!  ---
const fs = require('fs');
// const inputPath = "./test-case.txt";
// const inputPath = "./test-case2.txt";
const inputPath = "./input.txt";

const digitMap = {
    "1": 1,
    "one": 1,
    "2": 2,
    "two": 2,
    "3": 3,
    "three": 3,
    "4": 4,
    "four": 4,
    "5": 5,
    "five": 5,
    "6": 6,
    "six": 6,
    "7": 7,
    "seven": 7,
    "8": 8,
    "eight": 8,
    "9": 9,
    "nine": 9,
};

let p1Sum = 0;
let p2Sum = 0;

const lines = fs.readFileSync(inputPath, 'utf-8').split(/\r?\n/);

// Read each line, add the first and last digit in the string and then add all of those...
// Part One and Part Two only differ in the regex needed.
lines.forEach(entry =>  {
        // Part 1
        const part1Digits = entry.match(/\d/g);
        const p1First = part1Digits[0];
        const p1Last = part1Digits.slice(-1)[0];
        const p1Val = (digitMap[p1First] * 10) + digitMap[p1Last];

        p1Sum = p1Sum + p1Val;

        // Part 2
        // The input has some sneaky combined numbers in the string
        // search and replace in the source to ensure the desired result.
        // Only found the three I'm searching for in my input, but added the others here.
        // .replace("eighthree", "eightthree")
        // .replace("fiveight", "fiveeight")
        // .replace("nineight", "nineeight")
        // .replace("sevenine", "sevennine")
        // .replace("threeight", "threeeight")
        const part2Digits = entry
            .replace("eightwo", "eighttwo")
            .replace("oneight", "oneeight")
            .replace("twone", "twoone")
            .match(/\d|one|two|three|four|five|six|seven|eight|nine/g);
        const p2First = part2Digits[0];
        const p2Last = part2Digits.slice(-1)[0];
        const p2Val = (digitMap[p2First] * 10) + digitMap[p2Last];

        p2Sum = p2Sum + p2Val;
    });

console.log(`Part 1: Sum is ${p1Sum}.`);
console.log(`Part 2: Sum is ${p2Sum}.`);
