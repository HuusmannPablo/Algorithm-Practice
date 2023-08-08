// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix arr is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  

// The left-to-right diagonal 1 + 5 + 9 = 15. The right to left diagonal 3 + 5 + 9 = 17. 
// Their absolute difference is |15 - 17| = 2.

// Function description

// Complete the diagonalDifference function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers

// Return
// int: the absolute diagonal difference

// Input Format
// The first line contains a single integer, n, the number of rows and columns in the 
// square matrix arr.
// Each of the next n lines describes a row, arr[i], and consists of n space-separated integers arr[i][j].

// Constraints
// -100 <= arr[i][j] <= 100

// Output Format
// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

function diagonalDifference(arr) {
    // initialize both diagonals
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    let arrayLength = arr.length;

    // loop through the array and add the values of the diagonals
    for (let i = 0; i < arrayLength; i++) {

        // for left diagonal, the indexes are the same
        leftDiagonal += arr[i][i];

        // for right diagonal, the indexes are the same, but the second index is the length of the array minus the first index minus 1
        rightDiagonal += arr[i][arrayLength - i - 1];
    };

    // return the absolute difference between the two diagonals
    return Math.abs(leftDiagonal - rightDiagonal);
};
