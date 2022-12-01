// Plan for part 1:
// - Read file line by line
// - as an elf's calarie total is calculated,
//   push it on an array while also tracking the max

// import { readFileSync } from 'fs';
const fs = require('fs');
const totals = [0];

let currentIndex = 0;
let maxTotal = 0;

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

// Part 2 addition asks for the sum of the top three calorie snack totals
// Taking the "easy" way out and sorting after the fact rather than in place above
totals.sort((a, b) => b - a);

console.log(`The totals are ${totals}`);
console.log(`Max Calorie Holder has ${maxTotal} calories.`);
console.log(`The top three calorie holders have ${totals.slice(0, 3)} calories each.`);
console.log(`The total of the top three is ${totals[0] + totals[1] + totals[2]}.`);
