// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

// SOLUTION 1: Although this procedure returns the expected array, when I use the function to filter I am creating a copy of the array
// which is not valid for this exercise.
function isNotZero(value) {
    return value != 0;
}

const moveZeroes2 = function(nums) {
    const originalLength = nums.length;
    nums = nums.filter(isNotZero);
    const newLength = nums.length;
    for (let i = 0; i <= (originalLength - newLength); i++){
        nums.push(0);
    }
    return nums;
};

// SOLUTION 2: This procedure will run through the entire array, checking if the values is zero or not. 
// If it is, it will put a 0 at the back with .push(), and delete the 0 that it found with .splice()
const moveZeroes = function(nums) {
    for (let i = nums.length - 1; i >= 0; i--){
        if(nums[i]===0){
            nums.push(0) 
            nums.splice(i,1)
        }
    }
    return nums
};

nums = [0,-1,0,0,12,0,-100]
moveZeroes(nums)