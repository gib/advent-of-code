const fs = require('fs');

// Assignment pairs are comma separated integer ranges in the following form
// r1.0-r1.1,r2.0-r2.1
// where in each pair, the first number in the hyphenated range
// is less than or equal to the second
// examples:
//      2-10,8-15
//      8-15,1-2
//      10-10,1-11
// const assignmentPairs = fs.readFileSync('./test-case.txt', 'utf-8').split(/\r?\n/);
const assignmentPairs = fs.readFileSync('./input.txt', 'utf-8').split(/\r?\n/);

// --- Part One --- 
// How many assingment pairs have one range that is fully contained in the other?
// r1.0 * * * * * * * * r1.1
//      r2.0 * * * r2.1
const hasFullRangeOverlap = (r1, r2) => {
    return r1[0] <= r2[0] &&
           r2[1] <= r1[1];
}

// --- Part Two --- 
// How many assingment pairs have any overlap?
// r1.0 * * * * r1.1
//          r2.0 * * * * r2.1
const hasAnyRangeOverlap = (r1, r2) => {
    return r1[0] <= r2[0] &&
           r2[0] <= r1[1];
}

// Loop over each pair of range assigments and total up ranges with overlaps
let assignmentsWithFullRangeOverlap = 0;
let assignmentsWithAnyRangeOverlap = 0;

assignmentPairs.forEach(pair => {
    const assignments = pair.split(',');

    // Initally forgot to parse the valuse as integers for comparison
    // 37 is not less than 4, but "37" is less than "4" 🤦🏽 
    const r1 = assignments[0].split('-').map(v => parseInt(v));
    const r2 = assignments[1].split('-').map(v => parseInt(v));

    // Evaluate the ranges in either order
    if (hasFullRangeOverlap(r1, r2) || hasFullRangeOverlap(r2, r1)) {
        assignmentsWithFullRangeOverlap += 1;
    }
    if (hasAnyRangeOverlap(r1, r2) || hasAnyRangeOverlap(r2, r1)) {
        assignmentsWithAnyRangeOverlap += 1;
    }
});

// Answers: input.txt :: 602, test-case.txt :: 2
console.log(
    "In how many assignment pairs does one range fully contain the other?\n",
    assignmentsWithFullRangeOverlap
);

// Answers: input.txt :: 891, test-case.txt :: 4
console.log(
    "In how many assignment pairs do the ranges overlap?\n",
    assignmentsWithAnyRangeOverlap
);