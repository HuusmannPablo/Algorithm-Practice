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
        if(numbersFrequencies[nums[i]]) {
            numbersFrequencies[nums[i]].value += 1;
        } else {
            numbersFrequencies[nums[i]] = [nums[i]]; // double check the type of the key: value
            console.log(nums[i]);
        }
    }
    // if the number exists in the object, add 1 to the count
    // else, create a new key with the value and put freq = 1

    console.log(numbersFrequencies);

    const sortedNumberFerquencies = Object.entries(numbersFrequencies).sort((x, y) => x[1] - y[1]);
    // Double check sorting function
    // after that, sort the key:values from largest to smallest
    // Object.entries(obj).sort(function large to small);
    // I get an array of arrays with [[number, freq], [number2, freq2]...]
    

    // Option 1: Return the k most frequent numbers:
    
    // I need to assemble a new array with th enumbers
    const topKFrequentArray = [];
    
    for(let j = 0; j < k; j++) {
        topKFrequentArray.push(parseInt(sortedNumberFerquencies[j][0], 10))
    }
    // Loop from i=0 to k
    // push(array[i]) to topKFrequentArray


    return topKFrequentArray
    // return topKFrequentArray



    // Option 2: re-convert to object, but sorted
    // then Object.fromEntries(sortedObject);
    // this returns an object of key:values with everything sorted.
    // {number:freq, number2:freq2, ...} 
    // The numbers with higher freq will be the firstones




};

const nums = [1,1,1,2,2,3];
const k = 2;
const result = topKFrequent(nums, k);
console.log(result);
