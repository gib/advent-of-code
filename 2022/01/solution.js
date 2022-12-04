// --- Day 1: Calorie Counting ---
const fs = require('fs');
const totals = [0];

let currentIndex = 0;
let maxTotal = 0;

// --- Part One ---
// Find the Elf carrying the most Calories. How many total Calories is that Elf
// carrying?
fs.readFileSync('./input.txt', 'utf-8')
    .split(/\r?\n/)
    .forEach(entry =>  {
        // only operate on non empty lines
        // advance our tracking index to a new entry in the array
        if (entry.length === 0) {
            // Set currentIndex to operate on the end of the array
            currentIndex = currentIndex + 1;
            totals.push(0);
        } else {
            // Add this value to the current elf's total
            totals[currentIndex] = totals[currentIndex] + parseInt(entry);

            // Update the max
            maxTotal = Math.max(maxTotal, totals[currentIndex]);
        }
    });

// Puzzle input: 72718
// Test input:   24000
console.log(`Max Calorie Holder has ${maxTotal} calories.`);

// --- Part Two ---
// Find the top three Elves carrying the most Calories.
// How many Calories are those Elves carrying in total?
totals.sort((a, b) => b - a);

// Puzzle input: 213089
// Test input:    45000
console.log(`The top three calorie holders have ${totals.slice(0, 3)} calories each.`);
console.log(`The total of the top three is ${totals[0] + totals[1] + totals[2]}.`);
