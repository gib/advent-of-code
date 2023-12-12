// --- Day 4: Scratchcards ---
const fs = require('fs');

// All of the lines of the schema in an array
// const cards = fs.readFileSync('./test1.txt', 'utf-8').split(/\r?\n/);
const cards = fs.readFileSync('./input.txt', 'utf-8').split(/\r?\n/);

//
// --- Part One ---
//
// Add up the winning points of cards (one per line)
const calcPoints = card => {
    const pipeIndex = card.indexOf('|');
    const winningNumbers = card.slice(
        card.indexOf(':') + 2,
        pipeIndex - 1
    ).match(/\d+/g);

    const numbers = card.slice(
        card.indexOf('|') + 2
    ).match(/\d+/g);

    return numbers.filter(
        n => winningNumbers.includes(n)
    ).reduce(
        (accumulator, currentValue) => accumulator === 0 ? 1 : accumulator * 2,
        0
    );
};

// console.log(calcPoints("Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53"));
const pointTotal = cards.map(card => calcPoints(card)).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
);
console.log(`Part One: ${pointTotal}`);

//
// --- Part Two ---
//
// For each match on a card, you get a copy of the following card
const cardMatchCount = card => {
    const pipeIndex = card.indexOf('|');
    const winningNumbers = card.slice(
        card.indexOf(':') + 2,
        pipeIndex - 1
    ).match(/\d+/g);

    const numbers = card.slice(
        card.indexOf('|') + 2
    ).match(/\d+/g);

    return numbers.filter(n => winningNumbers.includes(n)).length;
};

// Each card counts as the original and copies will be added in processing
const processed = new Array(cards.length).fill(1);
// Track copies that need to be processed
const toProcess = new Array(cards.length).fill(1);

cards.forEach((card, index) => {
    while (toProcess[index] > 0) {
        let count = cardMatchCount(card);
        // cardMatches[index] = count;
        while (count > 0) {
            processed[index + count] = processed[index + count] + 1;
            toProcess[index + count] = toProcess[index + count] + 1;
            count = count - 1;
        }
        toProcess[index] = toProcess[index] - 1;
    }
});

// console.log(`Expected: ${[1, 2, 4, 8, 14, 1]}`);
// console.log(`Actual: ${processed}`);

const totalCards = processed.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`Total Cards: ${totalCards}`);
