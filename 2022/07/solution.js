// --- Day 7: No Space Left On Device ---
const fs = require('fs');

// Testing...
// const FILENAME = './test.txt';
// Solving...
const FILENAME = './input.txt';

const traversal = fs.readFileSync(FILENAME, 'utf-8').split(/\r?\n/);
const elfyPad = {
    '/': {
        children: {},
        name: '/',
        size: 0,
    }
};

// Build the elfyPad file system...
let command = '';
let workingDir = elfyPad['/'];
let workingPath = [''];

// path is an array of dirs: ['', 'foo', 'bar', 'baz']
// path.join('/') would look like '/foo/bar/baz'
const getWorkingDirFromPath = (path, elfyPadNode=elfyPad['/']) => {
    let dir = path.shift();

    if (dir === '') {
        // We're at root, and have move path. Get the next dir
        dir = path.shift();
    }

    if (path.length > 0) {
        // recursion FTW
        return getWorkingDirFromPath(path, elfyPadNode.children[dir]);
    }

    // This is the node we want
    return dir ? elfyPadNode.children[dir] : elfyPadNode;
};

while (traversal.length > 0) {
    const entry = traversal.shift();
    const parts = entry.split(' ');

    // command
    if (parts[0] === '$') {
        if (parts[1] === 'cd') {
            // update working path and dir
            command = 'cd';
            if (parts[2] === '..') {
                workingPath.pop();
            }
            else {
                if (parts[2] !== '/') {
                    workingPath.push(parts[2]);
                }
            }
            // Note: important to clone the working path!
            workingDir = getWorkingDirFromPath(workingPath.slice());
        }
    }

    // file
    if (Number.isInteger(parseInt(parts[0]))) {
        workingDir.children[parts[1]] = {
            name: parts[1],
            size: parseInt(parts[0]),
        };
    }

    // directory
    if (parts[0] === 'dir') {
        workingDir.children[parts[1]] = {
            children: {},
            name: parts[1],
            size: 0,
        }
    }
}
// elfyPad now represents the file system
// Calc sizes for each directory
const calculateDirSizes = dir => {
    for (const nodeName in dir.children) {
        const node = dir.children[nodeName];
        if (node.children) {
            calculateDirSizes(node);
        }
        dir.size += node.size;
    }
};
calculateDirSizes(elfyPad['/']);

// --- Part One --- 
// Find all of the directories with a total size of at most 100000
// This will count some files twice

// Traverse again, this time finding all directorys, 
// if size <= 100000, add it to the total for the solution to part one
const dirTotals = [];
const getDirTotals = (dir, totals) => {
    if (dir.size <= 100000) {
        totals.push(dir.size);
    }
    for (const nodeName in dir.children) {
        const node = dir.children[nodeName];
        if (node.children) {
            getDirTotals(node, totals);
        }
    }
};
getDirTotals(elfyPad['/'], dirTotals);
const partOneTotal = dirTotals.reduce((acc, cur) => acc + cur, 0);
console.log(`Part One solution: `, partOneTotal);
// For Test: 95437
// Solution: 1307902

// --- Part Two --- 
// Find the smallest single dir that if deleted will free up enough
// space for the elfyPad update.
const elfyPadCapacity = 70000000;
const freeSpaceReq = 30000000;
const currentFreeSpace = elfyPadCapacity - elfyPad['/'].size;
const potentialDirs = [];

const findPotentialDirs = (dir, sizes) => {
    if (currentFreeSpace + dir.size > freeSpaceReq) {
        sizes.push(dir.size);
    }
    for (const nodeName in dir.children) {
        const node = dir.children[nodeName];
        if (node.children) {
            findPotentialDirs(node, sizes);
        }
    }
};
findPotentialDirs(elfyPad['/'], potentialDirs);

const sortedSizes = potentialDirs.sort((a, b) => a - b);

console.log(`Part Two solution: `, sortedSizes[0]);
// For Test: 24933642
// Solution:  7068748
