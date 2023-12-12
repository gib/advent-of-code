// --- Day 3: Gear Ratios ---
const fs = require('fs');

// All of the lines of the schema in an array
// const schema = fs.readFileSync('./test1.txt', 'utf-8').split(/\r?\n/);
const schema = fs.readFileSync('./input.txt', 'utf-8').split(/\r?\n/);

//
// --- Part One ---
//
// Find nubmers adjacent to a symbol and add then to a sum
let sumPartNumbers = 0;

// Given a number and its line number in the schema
// determine if there is an adjacent symbol
const hasAdjacentSymbol = (num, lineNum, numIndex, schema) => {
    const lineLen = schema[lineNum].length;

    // if there is a prev line
    const prevLine = []
    if (lineNum > 0) {
        if (numIndex > 0) {
            prevLine.push(schema[lineNum - 1][numIndex - 1]);
        }
        for (let i = 0; i < num.length; i++) {
            prevLine.push(schema[lineNum - 1][numIndex + i]);
        }
        if (numIndex < lineLen) {
            prevLine.push(schema[lineNum - 1][numIndex + num.length]);
        }
        // console.log(prevLine.join(''));
    }

    // Check adjacent chars on the same line
    const line = []
    if (numIndex > -1) {
        line.push(schema[lineNum][numIndex - 1]);
    }
    if (numIndex < lineLen) {
        line.push(schema[lineNum][numIndex + num.length]);
    }
    // console.log(line.join(num));

    // if there is a next line
    const nextLine = []
    if (lineNum + 1 <= schema.length - 1) {
        if (numIndex > -1) {
            nextLine.push(schema[lineNum + 1][numIndex - 1]);
        }
        for (let i = 0; i < num.length; i++) {
            nextLine.push(schema[lineNum + 1][numIndex + i]);
        }
        if (numIndex < lineLen) {
            nextLine.push(schema[lineNum + 1][numIndex + num.length]);
        }
        // console.log(nextLine.join(''));
    }

    const possibilities = prevLine.concat(line).concat(nextLine).join('');
    if (possibilities.match(/\d/)) { return false; }
    const symbols = possibilities.match(/[^.0-9]/g) ?? [];
    // console.log(`possibilites ${possibilities}`);
    // console.log(`hasAdjacentSymbol? ${symbols} ${symbols.length > 0}`);
    // console.log("*******************************************************************\n");
    return symbols.length > 0;
};

schema.forEach((line, lineNum) => {
    // Get the part numbers and symbols
    const partNumbers = line.match(/\d+/g) ?? [];

    // Keep track of the offset so that duplicates don't process the
    // wrong position in the schema
    let offset = 0; 

    partNumbers.forEach(num => {
        let numIndex = line.indexOf(num, offset);
        if (hasAdjacentSymbol(num, lineNum, numIndex, schema)) {
            sumPartNumbers = sumPartNumbers + parseInt(num);
        }
        offset = numIndex + num.length;
    });
});

// Input: 553156 (too low), 557268 (too high)
// incorrect: 556569
// Test: 4361
console.log(`Part 1: ${sumPartNumbers}`);

//
// --- Part Two ---
//
// Find all '*'. Any pair of adjacent numbers are gear ratios that need to be
// multiplied and then added to a sum total of gear ratios.
const gearRatioTotal = 0;
const regexGearRatio = /\*/g;
const regexDigit = /[0-9]/;

const getNumber = (line, index) => {
    let num = 0;
    if (regexDigit.test(num)) {
        let i = index - 1; 
        let j = index + 1;
        num = line[index];

        // check left
        while (regexDigit.test(line[i])) {
            num = line[i] + num;     
            i = i - 1;
        }
        // check right
        while (regexDigit.test(line[j])) {
            num = num + line[j]
            j = j + 1;
        }
    }
    // console.log(`getNumber, line: ${line}\n index: ${index} \n ${num}`);
    return parseInt(num);
};

let gearRatioSum = 0;
schema.forEach((line, lineNumber) => {
    let prevLine, nextLine = "";
    const matches = line.matchAll(regexGearRatio);

    for (const match of matches) {
        let nums = [];
        let bottomLeft, bottom, bottomRight, topLeft, top, topRight = false;
        // console.log(`Found ${match[0]} start=${match.index} end=${
        //     match.index + match[0].length
        //   }.`);

        // Find any digits in the surrounding spots around the asterisk
        if (lineNumber > 0) {
            prevLine = schema[lineNumber - 1];
            topLeft = regexDigit.test(prevLine[match.index - 1]);
            top = regexDigit.test(prevLine[match.index]);
            topRight = regexDigit.test(prevLine[match.index + 1]);

            if (topLeft && top && topRight ||
                topLeft && !top && !topRight ||
                topLeft && top && !topRight) {
                nums.push(getNumber(prevLine, match.index - 1));
            }
            if (topLeft && !top && topRight) {
                nums.push(getNumber(prevLine, match.index - 1));
                nums.push(getNumber(prevLine, match.index + 1));
            }
            if (!topLeft && top) {
                nums.push(getNumber(prevLine, match.index));
            }
            if (!topLeft && !top && topRight) {
                nums.push(getNumber(prevLine, match.index + 1));
            }
        }
        if (nums.length <= 2 && regexDigit.test(line[match.index - 1])) {
            nums.push(getNumber(line, match.index - 1));
        } 
        if (nums.length <= 2 && regexDigit.test(line[match.index + 1])) {
            nums.push(getNumber(line, match.index + 1));
        } 
        if (lineNumber < schema.length - 1) {
            nextLine = schema[lineNumber + 1];
            bottomLeft = regexDigit.test(nextLine[match.index - 1]);
            bottom = regexDigit.test(nextLine[match.index]);
            bottomRight = regexDigit.test(nextLine[match.index + 1]);

            if (bottomLeft && bottom && bottomRight ||
                bottomLeft && !bottom && !bottomRight ||
                bottomLeft && bottom && !bottomRight) {
                nums.push(getNumber(nextLine, match.index - 1));
            }
            if (bottomLeft && !bottom && bottomRight) {
                nums.push(getNumber(nextLine, match.index - 1));
                nums.push(getNumber(nextLine, match.index + 1));
            }
            if (!bottomLeft && bottom) {
                nums.push(getNumber(nextLine, match.index));
            }
            if (!bottomLeft && !bottom && bottomRight) {
                nums.push(getNumber(nextLine, match.index + 1));
            }
        }
        if (nums.length === 2) {
            gearRatioSum = gearRatioSum + (nums[0] * nums[1]);
        }
    }
});

// Test sum of game power values:   2286
console.log(`Part 2: ${gearRatioSum}`);