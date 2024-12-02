// --- Day 2: Red-Nosed Reports  ---
import { readFileSync } from 'fs';

// const inputPath = "./test-case.txt";
const inputPath = "./input.txt";
// Read reports and convert strings to Numbers
const reports = readFileSync(inputPath, 'utf-8')
                    .trim()
                    .split(/\r?\n/)
                    .map(report => 
                        report
                            .split(' ')
                            .map(level => parseInt(level))
                    );

// Helper function to check if a sequence is safe according to the first condition
function isSafe(levels) {
  const isSortedAscending = levels.every((_, i, arr) => i === 0 || arr[i] >= arr[i - 1]);
  const isSortedDescending = levels.every((_, i, arr) => i === 0 || arr[i] <= arr[i - 1]);

  const isWithinRange = levels.slice(0, -1).every((n1, i) => {
    const n2 = levels[i + 1];
    return Math.abs(n1 - n2) >= 1 && Math.abs(n1 - n2) <= 3;
  });

  return isWithinRange && (isSortedAscending || isSortedDescending);
}

// Helper function to check if the sequence is safe by removing one element
function isSafeDampened(levels) {
  return levels.some((_, i) => {
    const newLevels = [...levels.slice(0, i), ...levels.slice(i + 1)];
    return isSafe(newLevels);
  });
}

// Part 1
const safeSum = reports.reduce((sum, levels) => sum + (isSafe(levels) ? 1 : 0), 0);
console.log(`Part 1: ${safeSum}`);

// Part 2
const dampenedSum = reports.reduce((sum, levels) => sum + (isSafeDampened(levels) ? 1 : 0), 0);
console.log(`Part 2: ${dampenedSum}`);