// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Function Description

// Complete the plusMinus function in the editor below.

// plusMinus has the following parameter(s):

// int arr[n]: an array of integers
// Print
// Print the ratios of positive, negative and zero values in the array. 
// Each value should be printed on a separate line with 6 digits after the decimal. 
// The function should not return a value.

// Input Format

// The first line contains an integer, n, the size of the array.
// The second line contains n space-separated integers that describe arr[n].

// Output Format
// Print the following 3 lines, each to 6 decimals:

// proportion of positive values
// proportion of negative values
// proportion of zeros


function plusMinus(arr) {

    let [negativesCount, positivesCount, zerosCount] = [0, 0, 0];
    
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativesCount++;
        } else if (arr[i] == 0) {
            zerosCount++;
        } else if (arr[i] > 0) {
            positivesCount++;
        }
    }
    
    console.log((positivesCount / arr.length).toFixed(6));
    console.log((negativesCount / arr.length).toFixed(6));
    console.log((zerosCount / arr.length).toFixed(6));
    
    return
};
