// --- Day 2: Rock Paper Scissors ---
// What would your total score be if everything goes exactly according to your
// strategy guide?
const fs = require('fs');
const rounds = fs.readFileSync('./input.txt', 'utf-8').split(/\r?\n/);

// --- Part One ---
// Scoring:
//      lose: 0
//      tie:  3
//      win:  6
//  with...
//      rock: 1
//      paper: 2
//      scissors: 3
const scoreLookup = {
    // Lose to Paper (with Rock): 0 + 1
    "B X": 1,
    // Lose to Scissors (with Paper): 0 + 2
    "C Y": 2,
    // Lose to Rock (with Scissors): 0 + 3
    "A Z": 3,
    // Tie with Rock: 3 + 1
    "A X": 4,
    // Tie with Paper: 3 + 2
    "B Y": 5,
    // Tie with Scissors: 3 + 3
    "C Z": 6,
    // Win with Rock: 6 + 1
    "C X": 7,
    // Win with Paper: 6 + 2
    "A Y": 8,
    // Win with Scissors: 6 + 3
    "B Z": 9,
};
// Apply the score look ups by mapping to each round (input line)
// take that result array of total round scores and reduce to the sum
const part1Score = rounds.map(round => scoreLookup[round])
    .reduce((runningTotal, nextScore) => runningTotal + nextScore, 0);

// Puzzle input answer: 14531
// Test input answer: 12
console.log(`Part 1 Score: ${part1Score}`);

// --- Part Two ---
const scoreLookupForReals = {
    // Lose to paper with rock 0 + 1
    "B X": 1,
    // Lose to scissors with paper 0 + 2
    "C X": 2,
    // Lose to rock with scissors 0 + 3
    "A X": 3,
    // Tie with rock 3 + 1
    "A Y": 4,
    // Tie with paper 3 + 2
    "B Y": 5,
    // Tie with with scissors 3 + 3
    "C Y": 6,
    // Beat scissors with rock 6 + 1
    "C Z": 7,
    // Beat rock with paper 6 + 2
    "A Z": 8,
    // Beat paper with scissors 6 + 3
    "B Z": 9
};

// Do the same using the "for reals" score look up
const part2Score = rounds.map(round => scoreLookupForReals[round])
    .reduce((runningTotal, nextScore) => runningTotal + nextScore, 0);

// Puzzle input answer is 11258
// Test input answer is 15
console.log(`Part 2 Score: ${part2Score}`);
