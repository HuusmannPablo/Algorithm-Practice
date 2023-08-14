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
    // Write your code here
    // Loop(map) through the array
        // sort each element (row)
    // once sorted I will need to loop using index
        // for index 0, ask if the next letter is "bigger" or equal thatn the previous one
            // true, move on to the next indexand at the end return YES
            // false, return NO
    for (let i = 0; i < grid.length; i++) {
        grid[i].split('').sort((a, b) => a - b).join('');
    };

    for (let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid.length; j++) {
            
        }
    }


}