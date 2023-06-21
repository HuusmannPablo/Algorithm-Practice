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
    for(let i = 0; i < nums.length; i++) {

        // If the number exists in the object, add 1 to the count of its frequency
        if(numbersFrequencies[nums[i]]) {
            numbersFrequencies[nums[i]].value += 1;

        // Otherwise create a new key with the value and put freq = 1
        } else {
            numbersFrequencies[nums[i]] = [nums[i]];
        }
    }

    // Sort the key:values from largest to smallest by its value(frequency)
    const sortedNumberFerquencies = Object.entries(numbersFrequencies).sort((x, y) => x[1] - y[1]);    
    
    // Create a new array that will hold the most used numbers
    const topKFrequentArray = [];
    
    // Loop from 0 to k and push every value into the new array as an integer
    for(let j = 0; j < k; j++) {
        topKFrequentArray.push(parseInt(sortedNumberFerquencies[j][0], 10))
    }

    // return the array with the most frequent numbers
    return topKFrequentArray
};

const nums = [1,1,1,2,2,3];
const k = 2;
const result = topKFrequent(nums, k);
console.log(result);
