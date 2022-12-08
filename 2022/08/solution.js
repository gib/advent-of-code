// --- Day 8: Treetop Tree House ---
const fs = require('fs');

const DEBUG = false;

const rowsOfTrees = fs.readFileSync(DEBUG ? './test.txt' : './input.txt', 'utf-8').split(/\r?\n/);
const trees = [];
let visibleTrees = 0;

// Create a 2-dimentional array representation of the grid
// Be sure to parse strings as integers for numeric comparisons
rowsOfTrees.forEach(row => {
    const integerHeightsRow = row.split('').map(strHeight => parseInt(strHeight))
    trees.push(integerHeightsRow);
})

const isEdge = (row, col, grid) => {
    return (
        row === 0 ||
        col === 0 ||
        row === trees.length - 1 || 
        col === trees[row].length - 1
    );
};

// A tree at row,col in the grid of trees is visible if any of its
// neighbors have a shorter height
const isVisibleToEdge = (row, col, direction, grid) => {
    const tree = grid[row][col];

    if (direction === 'above') {
        while(row > 0) {
            row = row - 1;

            if (grid[row][col] >= tree) {
                return false;
            }
        }
        return true;
    }

    if (direction === 'below') {
        while(row < grid.length - 1) {
            row = row + 1;

            if (grid[row][col] >= tree) {
                return false;
            }
        }
        return true;
    }

    if (direction === 'left') {
        while(col < grid[row].length - 1) {
            col = col + 1;
            if (grid[row][col] >= tree) {
                return false;
            }
        }
        return true;
    }

    if (direction === 'right') {
        while(col > 0) {
            col = col - 1;
            if (grid[row][col] >= tree) {
                return false;
            }
        }
        return true;
    }
};

// --- Part One ---
// Determine how many trees are visible
// only need the grid's interior nine trees, but all edge trees count as visible
trees.forEach((_rowHeight, row) => {
    trees[row].forEach((_colHeight, col) => {
        // Return true for all trees on the edges
        // Test inner trees with the `isVisible` helper method
        if (isEdge(row, col, trees) ||
            isVisibleToEdge(row, col, 'above', trees) ||
            isVisibleToEdge(row, col, 'below', trees) ||
            isVisibleToEdge(row, col, 'left', trees) ||
            isVisibleToEdge(row, col, 'right', trees)) {
                visibleTrees = visibleTrees + 1;
        }
    })
});

// Test:        21  
// Solution:  1779 
console.log('The grid has', visibleTrees, 'visible trees.');

// --- Part Two ---
// Calculate each tree's "Scenic Score" and find the max score
const getScenicScore = (row, col, grid) => {
    const tree = grid[row][col];

    let above = 0;
    let below = 0;
    let left = 0;
    let right = 0;

    // above
    let rowAbove = row - 1;
    while(rowAbove >= 0) {
        if (grid[rowAbove][col] < tree) {
           above = above + 1; 
        }
        else if (grid[rowAbove][col] >= tree) {
            // last tree visible, increment and break
            above = above + 1;
            break;
        }
        rowAbove = rowAbove - 1;
    }

    // below
    let rowBelow = row + 1;
    while(rowBelow < grid.length) {
        if (grid[rowBelow][col] < tree) {
            below = below + 1;
        }
        else if (grid[rowBelow][col] >= tree) {
            // last tree visible, increment and break
            below = below + 1;
            break;
        }
        rowBelow = rowBelow + 1;
    }

    // left
    let colLeft = col - 1;
    while(colLeft >= 0) {
        if (grid[row][colLeft] < tree) {
            left = left + 1;
        }
        else if (grid[row][colLeft] >= tree) {
            // last tree visible, increment and break
            left = left + 1;
            break;
        }
        colLeft = colLeft - 1;
    }

    // right
    let colRight = col + 1;
    while(colRight < grid[row].length) {
        if (grid[row][colRight] < tree) {
            right = right + 1;
        }
        else if (grid[row][colRight] >= tree) {
            // last tree visible, increment and break
            right = right + 1;
            break;
        }
        colRight = colRight + 1;
    }

    // Calculate the scenic score
    return above * below * left * right;
};

let maxScenicScore = 0;
trees.forEach((_rowHeight, row) => {
    trees[row].forEach((_colHeight, col) => {
        // Return true for all trees on the edges
        // Test inner trees with the `isVisible` helper method
        maxScenicScore = Math.max(
            maxScenicScore,
            isEdge(row, col, trees) ? 0 : getScenicScore(row, col, trees)
        );
    })
});

// Test:          8 
// Solution: 172224
console.log('The max Scenic Score is', maxScenicScore);