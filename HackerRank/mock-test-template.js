// This file is a template for HackerRank mock tests.

function flippingMatrix(matrix) {
    // Write your code here
    let n = matrix.length;
    let sum = 0;
    for (let i = 0; i < n/2; i++) {
        for (let j = 0; j < n/2; j++) {
            sum += Math.max(matrix[i][j], matrix[i][n - 1 - j], matrix[n - 1 - i][j], matrix[n - 1 - i][n - 1 - j]);
        }
    };
    return sum;
};

