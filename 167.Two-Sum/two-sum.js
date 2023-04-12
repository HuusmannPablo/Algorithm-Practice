// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. 
// Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.


// SOLUTION 1:
// Pick the first item from numbers, subtract it to the target, and ask if the result is included in the array.
    // If it's not included, continue
    // If it's included, find the indexes of both items, add 1, and create an array with those values
// This solution doesn't meet the runtime complexity

const twoSum1 = function(numbers, target) {
    for (let i=0; i <= numbers.length; i++){
        let numberToFind = target - numbers[i]
        if(!numbers.includes(numberToFind)){
            continue
        }
        const index1 = numbers.indexOf(numbers[i]) + 1;
        const index2 = numbers.lastIndexOf(numberToFind) + 1;
        return [index1, index2];
    }  
};


// SOLUTION 2:
// For this solution I will use BinarySearch, and for that I created the binarySearch function.

const twoSum = function(numbers, target) {
    let answerArray = [];
    for (let i = 0; i < numbers.length; i++) {
        const numberToFind = target - numbers[i];
        const trialIndex = binarySearch(numbers, numberToFind);
        if (numbers[trialIndex] === numberToFind) {
            if (trialIndex === i) {
                answerArray[0] = i + 1;
                answerArray[1] = trialIndex + 2;
            } else {
                answerArray[0] = i + 1;
                answerArray[1] = trialIndex + 1;
            }
            break;
        }
    }
    return answerArray;
};

const binarySearch = (numbers, numberToFind) => {
    let leftLimitIndex = 0;
    let rightLimitIndex = numbers.length;

    while (leftLimitIndex < rightLimitIndex) {
        const middleIndex = leftLimitIndex + Math.floor( (rightLimitIndex - leftLimitIndex) / 2 );
        if (numbers[middleIndex] >= numberToFind) {
            rightLimitIndex = middleIndex;
        } else {
            leftLimitIndex = middleIndex + 1;
        }
    }
    return leftLimitIndex;
};
