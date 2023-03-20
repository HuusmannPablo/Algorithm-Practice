// Given an integer array nums sorted in non-decreasing order, 
// return an array of the squares of each number sorted in non-decreasing order.

const sortedSquares = function(nums) {
    const sortedNums = nums.sort(function(a, b) {return a-b});
    for (let i = 0; i <= sortedNums.length; i++) {
        let squaredItem = sortedNums[i]*sortedNums[i];
        array[i] = squaredItem;
    }
    return array;
};

nums = [-7,-3,2,3,11]