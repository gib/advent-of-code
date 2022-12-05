// --- Day 5: Supply Stacks ---
const fs = require('fs');

// Test case supplly stacks
//
//     [D]    
// [N] [C]    
// [Z] [M] [P]
//  1   2   3 
const testStacks9000 = [
    ["Z", "N"],
    ["M", "C", "D"],
    ["P"],
];
// Deep copy for part two
const testStacks9001 = [
    testStacks9000[0].slice(),
    testStacks9000[1].slice(),
    testStacks9000[2].slice(),
]

// Puzzle input supply stacks
//
// [C]         [S] [H]                
// [F] [B]     [C] [S]     [W]        
// [B] [W]     [W] [M] [S] [B]        
// [L] [H] [G] [L] [P] [F] [Q]        
// [D] [P] [J] [F] [T] [G] [M] [T]    
// [P] [G] [B] [N] [L] [W] [P] [W] [R]
// [Z] [V] [W] [J] [J] [C] [T] [S] [C]
// [S] [N] [F] [G] [W] [B] [H] [F] [N]
//  1   2   3   4   5   6   7   8   9 
const supplyStacks9000 = [
    ["S", "Z", "P", "D", "L", "B", "F", "C"],
    ["N", "V", "G", "P", "H", "W", "B"],
    ["F", "W", "B", "J", "G"],
    ["G", "J", "N", "F", "L", "W", "C", "S"],
    ["W", "J", "L", "T", "P", "M", "S", "H"],
    ["B", "C", "W", "G", "F", "S"],
    ["H", "T", "P", "M", "Q", "B", "W"],
    ["F", "S", "W", "T"],
    ["N", "C", "R"],
];
// Deep copy for part two
const supplyStacks9001 = [
    supplyStacks9000[0].slice(),
    supplyStacks9000[1].slice(),
    supplyStacks9000[2].slice(),
    supplyStacks9000[3].slice(),
    supplyStacks9000[4].slice(),
    supplyStacks9000[5].slice(),
    supplyStacks9000[6].slice(),
    supplyStacks9000[7].slice(),
    supplyStacks9000[8].slice(),
];

// Parse order helper
//  "move 5 from 1 to 7" and return an object with count, src, and dest
// { count: 5, src: 0, dest: 6 }
// Ensure src and dest are corrected for zero-base indexed arrays.
// Note: Don't forget to parseInt on those numeric strings!
const parseOrder = rawOrder => {
    const order = rawOrder.split(' ');
    return {
        count: parseInt(order[1]),
        src: parseInt(order[3] - 1),
        dest: parseInt(order[5] - 1),
    };
}

// Testing...
// let stacks9000 = testStacks9000;
// let stacks9001 = testStacks9001;
// const stackingOrders = fs.readFileSync('./test.txt', 'utf-8').split(/\r?\n/);

// Solving...
const stacks9000 = supplyStacks9000;
const stacks9001 = supplyStacks9001;
const stackingOrders = fs.readFileSync('./input.txt', 'utf-8').split(/\r?\n/);

// --- Part One --- 
stackingOrders.forEach(rawOrder => {
    const order = parseOrder(rawOrder);
    while (order.count > 0) {
        stacks9000[order.dest].push(stacks9000[order.src].pop());
        order.count--;
    }
});

// Get the last item (.at(-1)) of each array stack
const topCrates9000 = stacks9000.reduce((tops, currentStack) => `${tops}${currentStack.at(-1)}`, "");

// Answer for test.txt :: CMZ
// Answer for input.txt :: FWSHSPJWM
console.log(`The top crate of each stack moved by a CrateMover 9000: ${topCrates9000}`);


// --- Part Two --- 
// It's a CrateMover 9001?!
stackingOrders.forEach(rawOrder => {
    const order = parseOrder(rawOrder);
    const cratesToMove = stacks9001[order.src].splice(-order.count);
    stacks9001[order.dest].push(...cratesToMove);
});

// Get the last item (.at(-1)) of each array stack
const topCrates9001 = stacks9001.reduce((tops, currentStack) => `${tops}${currentStack.at(-1)}`, "");

// Answer for test.txt :: MCD
// Answer for input.txt :: PWPWHGFZS
console.log(`The top crate of each stack moved by a CrateMover 9001: ${topCrates9001}`);