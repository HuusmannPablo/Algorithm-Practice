// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. 
// Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

// SOLUTION 1:
// Pick the first item from numbers, subtract it to the target, and ask if the result is included in the array.
    // If it's not included, continue
    // If it's included, find the indexes of both items, add 1, and create an array with those values

const twoSum = function(numbers, target) {
    for (let i=0; i <= numbers.length; i++){
        let difference = target - numbers[i]
        if(!numbers.includes(difference)){
            continue
        }
        const index1 = numbers.indexOf(numbers[i]) + 1;
        const index2 = numbers.lastIndexOf(difference) + 1;
        return [index1, index2];
    }  
};