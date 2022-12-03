// --- Day 2: Rock Paper Scissors ---
//
// The Elves begin to set up camp on the beach. To decide whose tent gets to be
// closest to the snack storage, a giant Rock Paper Scissors tournament is
// already in progress.
//
// Rock Paper Scissors is a game between two players. Each game contains many
// rounds; in each round, the players each simultaneously choose one of Rock,
// Paper, or Scissors using a hand shape. Then, a winner for that round is
// selected: Rock defeats Scissors, Scissors defeats Paper, and Paper defeats
// Rock. If both players choose the same shape, the round instead ends in a draw.
//
// Appreciative of your help yesterday, one Elf gives you an encrypted strategy
// guide (your puzzle input) that they say will be sure to help you win. 
// "The first column is what your opponent is going to play: A for Rock, B for
// Paper, and C for Scissors. The second column--" Suddenly, the Elf is called
// away to help with someone's tent.
//
// The second column, you reason, must be what you should play in response:
// X for Rock, Y for Paper, and Z for Scissors. Winning every time would be
// suspicious, so the responses must have been carefully chosen.
//
// The winner of the whole tournament is the player with the highest score. Your
// total score is the sum of your scores for each round. The score for a single
// round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3
// for Scissors) plus the score for the outcome of the round (0 if you lost, 3
// if the round was a draw, and 6 if you won).
//
// Since you can't be sure if the Elf is trying to help you or trick you, you
// should calculate the score you would get if you were to follow the strategy
// guide.
//
// For example, suppose you were given the following strategy guide:
//
// ```
// A Y
// B X
// C Z
// ```
//
// This strategy guide predicts and recommends the following:
//
// In the first round, your opponent will choose Rock (A), and you should choose
// Paper (Y). This ends in a win for you with a score of 8 (+2 because you chose
// Paper + 6 because you won).
// In the second round, your opponent will choose Paper (B), and you should choose
// Rock (X). This ends in a loss for you with a score of 1 (1 + 0).
// The third round is a draw with both players choosing Scissors, giving you a
// score of 3 + 3 = 6.
// In this example, if you were to follow the strategy guide, you would get a total
// score of 15 (8 + 1 + 6).
//
// What would your total score be if everything goes exactly according to your
// strategy guide?
const fs = require('fs');
const rounds = fs.readFileSync('./input.txt', 'utf-8').split(/\r?\n/);

// Part 1 Lookup
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

// Your puzzle answer was 14531.
console.log(`Part 1 Score: ${part1Score}`);

// --- Part Two ---
//
// The Elf finishes helping with the tent and sneaks back over to you.
// "Anyway, the second column says how the round needs to end: X means
// you need to lose, Y means you need to end the round in a draw, and
// Z means you need to win. Good luck!"
//
// The total score is still calculated in the same way, but now you
// need to figure out what shape to choose so the round ends as
// indicated. The example above now goes like this:
//
// In the first round, your opponent will choose Rock (A), and you need
// the round to end in a draw (Y), so you also choose Rock.
// This gives you a score of 1 + 3 = 4.
//
// In the second round, your opponent will choose Paper (B), and you
// choose Rock so you lose (X) with a score of 1 + 0 = 1.
//
// In the third round, you will defeat your opponent's Scissors with Rock
// for a score of 1 + 6 = 7.
//
// Now that you're correctly decrypting the ultra top secret strategy guide,
// you would get a total score of 12.
// 
// Following the Elf's instructions for the second column, what would your
// total score be if everything goes exactly according to your strategy guide?

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

// Your puzzle answer was 11258.
console.log(`Part 2 Score: ${part2Score}`);
