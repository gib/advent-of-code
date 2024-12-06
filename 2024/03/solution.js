// --- Day 3: Mull It Over  ---
// import { readFileSync } from 'fs';
const { readFileSync } = require('fs');

// const inputPath = "./test-case.txt";
// const inputPath = "./test-case2.txt";
const inputPath = "./input.txt";

const lines = readFileSync(inputPath, 'utf-8').split(/\r?\n/);

// Helpers
// Takes the string multiply instruction as `mul(x,y)`
// extracts the two digits and returns their product.
const calcMul = instruction => {
    const operands = instruction.match(/\d+/g).map(Number);
    return operands[0] * operands[1];
};
const findMuls = line => line.match(/(mul\(\d+,\d+\))/g) ?? [];

// Part 1
const p1Sum = lines
                .flatMap(findMuls)
                .map(calcMul)
                .reduce((acc, num) => acc + num, 0);

console.log(`Part 1: ${p1Sum}`);

// Part 2
// splice out disabled sections of the line
const processLine = line => {
    let enabled = true;
    let processedLine = [];
    let i = 0;

    while (i < line.length) {
        if (line.substring(i, i + 7) === `don't()`) {
            enabled = false;
            i += 6;  // Skip the `don't()` instruction
        }
        else if (line.substring(i, i + 4) === `do()`) {
            enabled = true;
            i += 4;  // Skip the `do()` instruction
        }
        if (enabled) {
            processedLine.push(line[i]);  // Add valid character if mul is enabled
        }
        i++;
    }
    // console.log(lines);
    // console.log(`Line: ${line.length}, Processed: ${processedLine.join('').length}`);
    return processedLine.join('');
};

const p2Proccess = lines => {
    const mulRegex = /mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don\'t\(\)/gm;
    let matches = [];
    lines.forEach(line=>{
        let match
        while ((match=mulRegex.exec(line)) !== null){
            matches.push(match);
        }
    })

    let total = 0;
    let process = true;
    matches.forEach(match => {
        if (match[0].startsWith("do(")) {
            process = true;
        }
        else if (match[0].startsWith("don't(")) {
            process = false;
        }
        else if (match[0].startsWith("mul") && process) {
            total += (parseInt(match[1]) * parseInt(match[2]));
        }
    });

    return total;
}

// Too high 96245447
// Too high 97836217
// console.log(lines.map(processLine).length === lines.length);
// const p2Sum = lines.map(processLine)
//                     .flatMap(findMuls)
//                     .map(calcMul)
//                     .reduce((acc, num) => acc + num, 0);
const p2Sum = p2Proccess(lines);

console.log(`Part 2: ${p2Sum}`);
