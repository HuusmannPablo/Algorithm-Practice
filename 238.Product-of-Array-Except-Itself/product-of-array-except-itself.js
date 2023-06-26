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

const productExceptSelf = function(nums) {
    // SOLUTION 1:
    // loop through every item
    // split the array in two
    // multiply everything
    // put the result in a new array

    // const productLeft = numsLeft.reduce((a, b) => a * b, 1);
    // const productRight = numsRight.reduce((a, b) => a * b, 1);

    // Define an empty array
    const resultArray = [];

    const numsRight = nums.splice(i + 1); // if you splice at i, that value will be included in the resulting array

    // SOLUTION 2:
    // loop through the array
    // remove the i element from the array
    // multiply everything and add toresultArray
    // return the i element to place
    // return resultArray 

};

// This splitting function divides the array at the index value
const splitAt = (index, array) => {
    const clonedArray = [...array];
    return [clonedArray.splice(0, index), clonedArray];
}


const nums = [1,2,3,4];
const result = productExceptSelf(nums);
console.log(result);
