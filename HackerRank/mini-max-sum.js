// Given five positive integers, find the minimum and maximum values that can be calculated 
// by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of 
// two space-separated long integers.

// Example
// arr = [1,3,5,7,9]
// The minimum sum is 1 + 3 + 5 + 7 = 16 
// and the maximum sum is 3 + 5 + 7 + 9 = 24. 
// The function prints
// 16 24

// Function Description
// Complete the miniMaxSum function in the editor below.
// miniMaxSum has the following parameter(s):
// arr: an array of 5 integers

// Print
// Print two space-separated integers on one line: 
// the minimum sum and the maximum sum of 4 of 5 elements.

// Input Format
// A single line of five space-separated integers.

// Output Format
// Print two space-separated long integers denoting the respective minimum and maximum 
// values that can be calculated by summing exactly four of the five integers. 
// (The output can be greater than a 32 bit integer.)

function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);
    let minSum = 0;
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i < 4) {
            minSum += arr[i];
        }
        if (i > 0) {
            maxSum += arr[i];
        }
    }

    console.log(minSum, maxSum);
    
    return;
};
