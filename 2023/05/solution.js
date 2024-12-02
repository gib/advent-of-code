// --- Day 4: Scratchcards ---
const fs = require('fs');

// All of the lines of the schema in an array
// const almanac = fs.readFileSync('./test1.txt', 'utf-8').split(/\r?\n/);
const almanac = fs.readFileSync('./input.txt', 'utf-8').split(/\r?\n/);

// Seeds
let seeds;

// Maps
class Map {
    constructor(name) {
        this.name = name;
        this.destinations = [];
        this.lengths = [];
        this.sources = [];
    }

    // For a given source value, find the corresponding destination
    lookup(value) {
        for (let i = 0; i < this.sources.length; i++) {
            let length = this.lengths[i];
            let destination = this.destinations[i];
            let source = this.sources[i]
            // is the src in the current range?
            let j = 0;
            if (value >= source && value <= source + length) {
                while(j < length) {
                    if (value === source + j) {
                        // console.log(`Found a value in range for ${this.name}:`);
                        // console.log(`    value: ${value}`);
                        // console.log(`    i: ${i}`);
                        // console.log(`    source: ${source}`);
                        // console.log(`    destination: ${destination}`);
                        // console.log(`    length: ${length}`);
                        // console.log(`    j: ${j}`);
                        // console.log(`    source + j: ${source + j}`);
                        // console.log(`    destination + j: ${destination + j}`);
                        // console.log(`Found a ${this.name}: ${value} -> ${destination + j}`);
                        return destination + j;
                    }
                    j++;
                }
            }
        }
        // If not found, the corresponding destination value is the same
        // console.log(`Not found for ${this.name}: ${value} -> ${value}`);
        return value;
    }
};

const maps = {
    'seed-to-soil map:': new Map('seed-to-soil'),
    'soil-to-fertilizer map:': new Map('soil-to-fertilizer'),
    'fertilizer-to-water map:': new Map('fertizlier-to-water'),
    'water-to-light map:': new Map('water-to-light'),
    'light-to-temperature map:': new Map('light-to-temperature'),
    'temperature-to-humidity map:': new Map('temperature-to-humidity'),
    'humidity-to-location map:': new Map('humidity-to-location'),
};

// Store the almanac in a friendlier format...
let currentMap = '';
almanac.forEach(line => {
    if (line.includes('seeds:')) {
        seeds = line.replace('seeds: ', '').split(' ').map(str => parseInt(str));
    }
    else if (line.includes('map:')) {
        currentMap = line;
    }
    else if (line.match(/\d+/)) {
        let rangeInfo = line.split(' ').map(str => parseInt(str));
        maps[currentMap].destinations.push(rangeInfo[0]);
        maps[currentMap].sources.push(rangeInfo[1]);
        maps[currentMap].lengths.push(rangeInfo[2]);
    }
});

const seedToLocation = seed => {
    let soil = maps['seed-to-soil map:'].lookup(seed);
    let fertilizer = maps['soil-to-fertilizer map:'].lookup(soil);
    let water = maps['fertilizer-to-water map:'].lookup(fertilizer);
    let light = maps['water-to-light map:'].lookup(water);
    let temperature = maps['light-to-temperature map:'].lookup(light);
    let humidity = maps['temperature-to-humidity map:'].lookup(temperature);
    let location = maps['humidity-to-location map:'].lookup(humidity);
    return location;
};

//
// --- Part One ---
//
// For each seed number, find the corresponding location.
// Return the location with the lowest value.

// const minLocation = seeds
//                         .map(seedToLocation)
//                         .reduce((min, val) => Math.min(min, val), Infinity);
// console.log(`Part One: ${minLocation}`);

//
// --- Part One ---
//
// The seed values are ranges, not seed numbers.
let min2 = 16698839; // Infinity;

// Process each seed range, listed in pairs
let seedRanges = seeds.length / 2;
console.log(`\nNeed to process ${seedRanges} ranges...\n`);

// Seed range 0: 432986705 - 461060251
// 433057300

for (let i = 0; i < seeds.length; i = i + 2) {
    let start = seeds[i];
    let end = start + seeds[i + 1];

    console.log(`-------------------------------------`);
    console.log(`Seed range ${i}: ${start} - ${end}\nCurrent minimum location: ${min2}\n`);

    // check the ends...
    let startLocation = seedToLocation(start);
    min2 = Math.min(startLocation, min2);
    console.log(`Seed ${start} -> Location ${startLocation}, MIN: ${min2}`);
    let endLocation = seedToLocation(end - 1);
    min2 = Math.min(endLocation, min2);
    console.log(`Seed ${end - 1} -> Location ${endLocation}, MIN: ${min2}`);
    
    // for (let j = start; j < end; j++) {
    for (let j = start; j < end; j++) {
        let location = seedToLocation(j);
        let prevMin2 = min2;
        // console.log(`seedToLocation: ${j} -> ${location}`);
        min2 = Math.min(location, min2);
        console.log(`Seed ${j} -> Location ${location}, MIN: ${min2}`);
        if (prevMin2 === min2) {
            // j += stepMultipliers[stepMultipliers.length * Math.random() | 0];
        }
        else {
            console.log('\n\n**************** NEW MIN!!! ***************\n\n');
        }
    }
}

console.log(`Part Two: ${min2}`);