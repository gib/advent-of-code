// --- Day 3: Rucksack Reorganization ---
const fs = require('fs');
// const sacks = fs.readFileSync('./test-case.txt', 'utf-8').split(/\r?\n/);
const sacks = fs.readFileSync('./input.txt', 'utf-8').split(/\r?\n/);

// Saw some cool char code offsets calculalted by others
// const uppercaseOffset = -38;
// const lowercaseOffset = -96;
// const evaluated = duplicateItem.charAt(0)
// Need to define `isUppercase`
// value = duplicateItem.isUppercase ? duplicateItem + uppercaseOffset : duplicateItem + lowercaseOffset;
// ...
// yeah, static lookup FTW, vi shenanigans made this easy to write up quickly too
const priorityLookup = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10,
    k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20,
    u: 21, v: 22, w: 23, x: 24, y: 25, z: 26,
    A: 27, B: 28, C: 29, D: 30, E: 31, F: 32, G: 33, H: 34, I: 35, J: 36,
    K: 37, L: 38, M: 39, N: 40, O: 41, P: 42, Q: 43, R: 44, S: 45, T: 46,
    U: 47, V: 48, W: 49, X: 50, Y: 51, Z: 52
};

// --- Part One ---
const prioritySum = sacks.map(sack => {
        // split the compartments and find the priority (duplicated) item
        const leftCompartment = sack.slice(0, sack.length / 2);
        const rightCompartment = sack.slice(leftCompartment.length);
        let duplicateItem = "-";

        // walk the left side and compare to every item in the right side...
        // once we find one, return it as the value in the new array in
        // the mapping we're in
        for (let i = 0; i < leftCompartment.length; i++) {
            if (rightCompartment.includes(leftCompartment[i])) {
                duplicateItem = leftCompartment[i];
                break;
            }
        }
        return priorityLookup[duplicateItem];
    })
    .reduce((runningTotal, nextValue) => runningTotal + nextValue, 0);

// Puzzle input sum: 7980
// Test input sum:    157
console.log(`Part 1: ${prioritySum}`);

// --- Part Two ---
// Find the item type that corresponds to the badges of each three-Elf group.
// What is the sum of the priorities of those item types?
let priorityBadgeSum = 0;

for (let i = 0; i < sacks.length; i = i + 3) {
    // Make some easy references for the sacks in this group of three
    // What if the group was a variable, `n`?
    const sack1 = sacks[i];
    const sack2 = sacks[i + 1];
    const sack3 = sacks[i + 2];
    let badge = "-";

    // console.log(`Group ${i} sacks`, sack1, sack2, sack3);
    for (let j = 0; j < sack1.length; j++) {
        if (sack2.includes(sack1[j]) && sack3.includes(sack1[j])) {
            // found the badge! assign it and break
            badge = sack1[j];
            break;
        }
    }

    priorityBadgeSum = priorityBadgeSum + priorityLookup[badge];
}

// Puzzle input sum:  2881
// Test input sum:      70
console.log(`Part 2: ${priorityBadgeSum}`);