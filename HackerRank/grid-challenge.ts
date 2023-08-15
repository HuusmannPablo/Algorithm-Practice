// Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. 
// Determine if the columns are also in ascending alphabetical order, top to bottom. 
// Return YES if they are or NO if they are not.

// Example
// grid = ['abc', 'ade', 'efg']
// The grid is illustrated below.
// a b c
// a d e
// e f g

// The rows are already in alphabetical order. 
// The columns a a e, b d f and c e g are also in alphabetical order, so the answer would be YES. 
// Only elements within the same row can be rearranged. 
// They cannot be moved to a different row.

function gridChallenge(grid: string[]): string {

    // Initialize newGrid
    let newGrid = [];

    // Sort each row of grid
    for (let i = 0; i < grid.length; i++) {
        newGrid.push(grid[i].split('').sort());
    };
    console.log(newGrid);

    // Check if each column is in ascending alphabetical order
    for (let i = 0; i < newGrid[0].length; i++) {        
        for(let j = 0; j < newGrid.length - 1; j++) {

            // If the current letter is in alphabetical order, continue
            if(newGrid[j][i] <= newGrid[j + 1][i]) {
                continue
            // Otherwise, return 'NO'
            } else {
                return 'NO'
            };
        };
    };

    // If all the columns and rows are in ascending alphabetical order, return 'YES'
    return 'YES'
};
