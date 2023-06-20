// Given an integer array nums and an integer k, return the k most frequent elements. 
// You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

const topKFrequent = function(nums, k) {
    // Creat an object to store numbers and frequencies
    const numbersFrequencies = {};

    // Loop through the nums array 

    // if the number exists in the object, add 1 to the count

    // else, create a new key with the value and put freq = 1

    // after that, sort the key:values from largest to smallest
    // Object.entries(obj).sort(function large to small);
    // I get an array of arrays with [[number, freq], [number2, freq2]...]
    
    // Option 1: Return the k most frequent numbers:
    



    // Option 2: re-convert to object, but sorted
    // then Object.fromEntries(sortedObject);
    // this returns an object of key:values with everything sorted. 
    // The numbers with higher freq will be the firstones




};


