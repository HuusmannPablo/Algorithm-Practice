// Find the Missing Number:
// Write a function that takes an array of integers from 1 to n (with one number missing) and returns the missing number.
// For example, if the input is [1, 2, 4, 5, 6], the function should return 3.

function findingMissingNumber(inputArray) {

    // Edge cases: Empty array. Missing number is number 1. The array has only one element
    if(inputArray.length === 0) {
        return `The input array is empty`
    } else if (inputArray[0] === 2) {
        return 1
    } else if(inputArray.length === 1) {
        return `The input array has only one item`
    } 

    // We loop through the array, and check for every consecutive number 
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i + 1] - inputArray[i] === 2) return inputArray[i] + 1;
    }
    return `The input array has no missing numbers`;
}

console.log(findingMissingNumber([]));                       // Should retrun The input array is empty
console.log(findingMissingNumber([1]));                      // Should retrun The input array has only one item
console.log(findingMissingNumber([2]));                      // Should retrun 1
console.log(findingMissingNumber([1,2,3,4,5,7,8,9]));        // Should retrun 6
console.log(findingMissingNumber([1,2,3,4,5,6,7,8,9]));      // Should retrun The input array has no missing numbers
