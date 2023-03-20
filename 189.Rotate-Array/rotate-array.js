// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// EXAMPLE:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// VERSION 1: rotating item by item
const rotateArray = function(array, steps) {
    for (let i = 1; i <= steps; i++){
        // identifying the last item's value
        const lastNumber = array[array.length - 1];
        // Removing the last item from the array
        array.splice(-1, 1);
        // Adding lastNumber value in front of the array
        array.unshift(lastNumber);
    }
    return (array)
};

// VERSION 2: splitting array and reordering
const rotateArray2 = function (array, steps) {
    const length = array.length
    steps = (steps % length)
    let end = array.splice(length - steps)
    array.splice(0,0,...end)
};