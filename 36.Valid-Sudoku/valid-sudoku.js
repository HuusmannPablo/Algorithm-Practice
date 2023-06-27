// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Example 1:
// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

const isValidSudoku = function(board) {
   
// SOLUTION 1: 
// I could loop through the rows and columns checking every value
// for the first value:
    // check its not present in the rest of the row
    // check its not present in the rest of the column
    // check its not present in the box (depending of its index to identify which box I shoild check)
    // box 1: 0-2
    // box 2: 3-5
    // box 3: 6-8

// SOLUTION 2:
// I should check the rows
    // I can create a Set and put the numbers there, and check that they are not there already
    // keep going if they are not there, return false if thay are

// I should check the columns then
    // I can create a Set and put the numbers there, and check that they are not there already
    // keep going if they are not there, return false if thay are

// I should check the 3x3 boxes
// Need to figure out how to identify each box
// and use the same Set procedure as in the ohter two checks

    for(let i = 0; i < 9; i++) {

        // create a Set
        for(let j = 0; j < 9; j++) {
            // if(there is a number && that number is in the set)
                return false
            // else, add the number to the set
        }
    }


};

const board = [
    ["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]
];
const result = isValidSudoku(board);
console.log(result); // Expected: true
