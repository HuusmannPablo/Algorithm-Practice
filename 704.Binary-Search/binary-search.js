//  Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
// If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

// SOLUTION 1:
// Although this solution does the job, it runs in O(n) and not in O(log n)
const search = function(nums, target) {
    const targetIndex = nums.indexOf(target)
    return (targetIndex)
}

// SOLUTION 2:
// Using Binary Search
const search2 = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const nums = [-1,0,3,5,9,12];
const target = 9; // expected result: 4
// const target = 6; // expected result: -1
search(nums, target);
