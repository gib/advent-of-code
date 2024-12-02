// --- Day 4: Scratchcards ---
const fs = require('fs');

// Test Races
// const races = [
//     { time: 7, distance: 9 },
//     { time: 15, distance: 40 },
//     { time: 30, distance: 200 },
// ];

// Real Races
const races = [
    { time: 44, distance: 208 },
    { time: 80, distance: 1581 },
    { time: 65, distance: 1050 },
    { time: 72, distance: 1102 },
];

// Number of ways to beat each record
const marginOfError = races.map(race => {
    let ways = 0;
    for (let secHold = 1; secHold < race.time; secHold++) {
        let d = (race.time - secHold) * secHold;
        if (d > race.distance) {
            ways = ways + 1;
        }
    }
    return ways;
}).reduce((acc, ways) => acc * ways, 1);

// console.log(`ways per race: ${waysPerRace}`);
console.log(`Part One: ${marginOfError}`);

// Part Two

// Bad Kerning?!
// const raceTime = 71530;
// const raceDistance = 940200;
const raceTime = 44806572;
const raceDistance = 208158110501102;
let ways = 0;
for (let secondsHeld = 1; secondsHeld < raceTime; secondsHeld++) {
    let distance = (raceTime - secondsHeld) * secondsHeld;
    if (distance > raceDistance) {
        ways++;
    }
}
console.log(`Part Two: ${ways}`);