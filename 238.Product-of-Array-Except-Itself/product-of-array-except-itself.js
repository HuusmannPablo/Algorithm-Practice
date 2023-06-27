// Given an integer array nums, return an array answer such that 
// answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


// SOLUTION 1:
// Define an empty array resultsArray
// loop through the nums array
// remove the i element from the array
// multiply everything and add to resultArray
// return the i element to place
// return resultArray 

// This solution works for small amounts of data in nums array, but it exceeds time complexity on very large arrays.

const productExceptSelf = function(nums) {
    
    const resultsArray = [];

    for(let i = 0; i < nums.length; i++) {
        const removedNumber = nums.splice(i, 1);
        const productTotal = nums.reduce((a, b) => a * b, 1);
        resultsArray.push(productTotal);
        nums.splice(i, 0, removedNumber);
    };

    return resultsArray;
};

    // splice example
// const myArray = [1, 2, 3, 4, 5];
// const x = myArray.splice(1, 1);
// myArray values: 1,3,4,5
// variable x value: 2


// SOLUTION 2:
// I'm reading about prefix and sufix arrays, and how to use them for this example

// On the first pass, iterate through the array and create an array of prefixes, 
// which give us the product of all left elements for each position

// On the second pass, iterate through the array and create an array of suffixes, 
// which give us the product of all right elements for each position

// On the third pass, build a result array that contains the product of prefixes[i] * suffixes[i] 
// for each position, and return this as our answer.

const productExceptSelf2 = function(nums) {
    
    // Create an empty prefix array
    const prefixArray = [];

    // Loop through the nums array from left to right, multiplying every element to the left
    // For the first element, set equal to 1 as there is nothing to the left of it
    for(let i = 0; i < nums.length; i++) {
        if(i === 0) {
            prefixArray[i] = 1;
        } else {
            prefixArray[i] = nums[i - 1] * prefixArray[i - 1];
        };
    };


    // Create an empty sufix array
    const sufixArray = [];

    // Loop through the nums array from last to first, multiplying every element to the right
    // For the last element, set equal to 1 as there is nothing to the right of it
    for(let j = nums.length - 1; j >= 0; j--) {
        if(j === nums.length - 1) {
            sufixArray[j] = 1;
        } else {
            sufixArray[j] = nums[j + 1] * sufixArray[j + 1];
        };
    };

    // Create an empty results array
    const resultArray = [];

    // Loop one more time multiplying the two arrays to get the result
    for(let k = 0; k < nums.length; k++) {
        resultArray[k] = prefixArray[k] * sufixArray[k];
    };

    return resultArray;
};


const nums = [1,2,3,4,3,2,1];
const result = productExceptSelf2(nums);
// const result = productExceptSelf(nums);
console.log(result); // Expected output: [144, 72, 48, 36, 48, 72, 144]
