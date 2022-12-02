const fs = require('fs');

// Part 1 Lookup
// Scoring:
//      lose: 0
//      tie:  3
//      win:  6
//  with...
//      rock: 1
//      paper: 2
//      scissors: 2
const scoreLookup = {
    // I lose...
    //  to Rock (with Scissors): 0 + 3
    "A Z": 3,
    //  to Paper (with Rock): 0 + 1
    "B X": 1,
    //  to Scissors (with Paper): 0 + 2
    "C Y": 2,

    // I win...
    //  with Rock: 6 + 1
    "C X": 7,
    //  with Paper: 6 + 2
    "A Y": 8,
    //  with Scissors: 6 + 3
    "B Z": 9,

    // Tie ...
    // with Rock: 3 + 1
    "A X": 4,
    // with Paper: 3 + 2
    "B Y": 5,
    // with Scissors: 3 + 3
    "C Z": 6,
};

// Part 2 Lookup
// "Anyway, the second column says how the round needs to end: 
// X means you need to lose,
// Y means you need to end the round in a draw,
// and Z means you need to win.
// Good luck!"
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

let part1Score = 0;
let part2Score = 0;

const rounds = fs.readFileSync('./input.txt', 'utf-8').split(/\r?\n/);

// Apply the score look ups by mapping to each round (input line)
// take that result array of total round scores and reduce to the sum
part1Score = rounds.map(round => scoreLookup[round])
    .reduce((runningTotal, nextScore) => runningTotal + nextScore, 0);

console.log(`Part 1 Score: ${part1Score}`);

// Do the same using the "for reals" score look up
part2Score = rounds.map(round => scoreLookupForReals[round])
    .reduce((runningTotal, nextScore) => runningTotal + nextScore, 0);

console.log(`Part 2 Score: ${part2Score}`);
