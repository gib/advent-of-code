// --- Day 1: Historian Hysteria  ---
import { readFileSync } from 'fs';

// const inputPath = "./test-case.txt";
const inputPath = "./input.txt";

const lines = readFileSync(inputPath, 'utf-8').split(/\r?\n/);

// Part 1
const leftList = []; 
const rightList = []; 
const numericASC = (a, b) => a - b;

// Part 2
const frequencyMap = {};

// Read each line and split into the left and right lists.
lines.forEach(entry =>  {
        // Part 1
        // Split the lists.
        const listEntries = entry.split('   ');
        const leftValue = listEntries[0];
        const rightValue = listEntries[1];

        // Use numeric values to aid in an ascending sort.
        leftList.push(parseInt(leftValue));
        rightList.push(parseInt(rightValue));

        // Part 2
        // As the left and right lists are built,
        // create a map to find frequencies to calculate
        // the similarity score.
        if (!frequencyMap.hasOwnProperty()) {
            frequencyMap[leftValue] = 0;
        }
    }
);
leftList.sort(numericASC);
rightList.sort(numericASC);

let totalDistances = 0;
for (let i = 0; i < leftList.length; i++) {
    // Sum the distances between the list entries for part 1.
    const distance = Math.abs(leftList[i] - rightList[i]);
    totalDistances = totalDistances + distance;

    // For each value in the right list, add up how 
    // many times it appears in the left...
    if (frequencyMap.hasOwnProperty(rightList[i])) {
        frequencyMap[rightList[i]] += 1;
    }
}

// Part 1
console.log(`Part 1: Total Distance of ${totalDistances}`);

// Part 2
// Loop the leftList one more time to calculate the similarity score.
let similarityScoreSum = 0;
leftList.forEach(entry => {
    const similarityScore = entry * frequencyMap[entry];
    similarityScoreSum += similarityScore;
});
console.log(`Part 2: Similarity score is ${similarityScoreSum}`);
