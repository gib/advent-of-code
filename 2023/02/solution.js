// --- Day 2: Cube Conundrum ---
const fs = require('fs');

// const games = fs.readFileSync('./test.txt', 'utf-8').split(/\r?\n/);
const games = fs.readFileSync('./input.txt', 'utf-8').split(/\r?\n/);

// --- Part One ---
// Determine which games would have been possible if the bag had been
// loaded with only 12 red cubes, 13 green cubes, and 14 blue cubes.
// Game i: round 1; round 2; round 3
// rounds: n color
let sumPossible = 0;
const maxMap = {
    "red": 12,
    "green": 13,
    "blue": 14,
};

const gameIsPossible = rounds => {
    return rounds.every(round => {
        const groups = round.split(', ');
        return groups.every(group => {
            const [count, color] = group.split(' ');
            return parseInt(count) <= maxMap[color];
        });
    });
};


// --- Part Two ---
// Determine the power of the minimum set of cubes in each game
// and add them up.
let sumPowers = 0;

const gamePowerValue = rounds => {

    const maxColor = {
        red: 0,
        green: 0,
        blue: 0
    };

    rounds.forEach(round => {
        const groups = round.split(', ');
        groups.forEach(group => {
            const [count, color] = group.split(' ');
            maxColor[color] = Math.max(maxColor[color], parseInt(count));
        });
    });

    return maxColor.red * maxColor.green * maxColor.blue;
}

games.forEach((game, index) => {
    const rounds = game.replace(/Game .*: /, '').split('; ');

    // Any impossible rounds in this game?
    const gameId = gameIsPossible(rounds) ? index + 1 : 0;
    sumPossible += gameId;

    sumPowers += gamePowerValue(rounds);
});

// Input sum of possible game IDs: 2105
// Test sum of possible game IDs:     8
console.log(`Part 1: ${sumPossible}`);

// --- Part Two ---

// Input sum of game power values:  2881
// Test sum of game power values:   2286
console.log(`Part 2: ${sumPowers}`);