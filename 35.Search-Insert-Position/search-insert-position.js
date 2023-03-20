// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

const searchInsert = function(nums, target) {
    let indexOfTarget = nums.findIndex(i => i == target)
    if(indexOfTarget != -1) {
        return indexOfTarget;
    } else {
        nums.push(target);
        const sortedNums = nums.sort(function(a,b) {return a-b});
        return sortedNums.findIndex(i => i == target);
    }
};

nums = [1,3,5,6,8,9];
target = 2;
searchInsert(nums, target);