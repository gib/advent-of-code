// --- Day 9: Rope Bridge ---
const fs = require('fs');
const { posix } = require('path');

const DEBUG = true;

// --- Part One ---
const motions = fs.readFileSync(DEBUG ? './test.txt' : './input.txt', 'utf-8').split(/\r?\n/);

// A log is simply a look-up to determine how many coordinate nodes
// were visited and the visit count.
// log: {
//     '0,0': 1,
//     '0,1': 1,
//     '0,2': 1,
// }
class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.log = { '0,0': 1 };
        this.prev = undefined;
    }

    updatePrev() {
        this.prev = new Position(this.x, this.y);
    }

    distance(pos) {
        const dx = this.x - pos.x;
        const dy = this.y - pos.y;

        return Math.hypot(dx, dy);
    }

    move(direction) {
        // store the prev when updating position
        this.updatePrev();

        if (direction === 'U') {
            this.y = this.y + 1;
        }
        if (direction === 'D') {
            this.y = this.y - 1;
        }
        if (direction === 'L') {
            this.x = this.x - 1;
        }
        if (direction === 'R') {
            this.x = this.x + 1;
        }
    }

    follow(pos) {
        if (pos.prev === null ||
            (pos.x === pos.prev.x) &&
            (pos.y === pos.prev.y)) {
            return;
        }

        this.updatePrev();
        // Find the difference between this and pos,
        // then apply it
        let xDiff = pos.x - pos.prev.x;
        let yDiff = pos.y - pos.prev.y;

        this.x = this.x + xDiff;
        this.y = this.y + yDiff;
    }

    moveTo(pos) {
        // store the prev when updating position
        this.updatePrev();

        this.x = pos.x;
        this.y = pos.y;
    }

    updateLog() {
        this.log[this.toString()] ??= 0;
        this.log[this.toString()] += 1;
    }

    get visitCount() {
        return Object.keys(this.log).length;
    }

    toString() {
        return `${this.x},${this.y}`;
    }
};

let head = new Position(0, 0);
let tail = new Position(0, 0);

// Let's look at each motion and start tracking the positions
motions.forEach(motion => {
    const direction = motion.split(' ')[0];
    let steps = parseInt(motion.split(' ')[1]);

    while (steps > 0) {
        steps = steps - 1;

        head.move(direction);
        head.updateLog();

        // Tail moves to where head was
        if (head.distance(tail) >= 2) {
            tail.moveTo(head.prev);
        }
        tail.updateLog();
    }
});

console.log('The tail visited', tail.visitCount, 'positions.');

// --- Part Two ---
const motions2 = fs.readFileSync(DEBUG ? './test2.txt' : './input.txt', 'utf-8').split(/\r?\n/);

// Rope with knots all starting at 0,0
// Same follow check. If the prev knot is >= 2 steps away,
// that knot should follow it.
const rope = [
    new Position(0, 0),
    new Position(0, 0),
    new Position(0, 0),
    new Position(0, 0),
    new Position(0, 0),
    new Position(0, 0),
    new Position(0, 0),
    new Position(0, 0),
    new Position(0, 0),
    new Position(0, 0),
];

motions2.forEach(motion => {
    const direction = motion.split(' ')[0];
    let steps = parseInt(motion.split(' ')[1]);

    debugger;
    while (steps > 0) {
        steps = steps - 1;

        // Move the head knot, note that prev positions are stored
        rope[0].move(direction);
        rope[0].updateLog();

        // Now check all of the following knots,
        for (let i = 1; i < rope.length; i++) {
            if (rope[i - 1].distance(rope[i]) >= 2) {
                // Don't move directly to prev,
                // apply the same move path...
                if (i === 1) {
                    rope[i].moveTo(rope[i - 1].prev);
                }
                else {
                    rope[i].follow(rope[i - 1]);
                }
            }
            rope[i].updateLog();
        }
    }
});

// rope.forEach((knot, index) => { 
//     console.log(`Knot`, index + 1, 'visited', knot.visitCount, 'positions.');
// });
debugger;
console.log(rope[9].visitCount);
console.log(rope[9].log);
