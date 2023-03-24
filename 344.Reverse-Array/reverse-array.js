// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// SOLUTION 1:
// The first solution that comes to mind would be to use .reverse(), but this prototype is destructive,
// so it doesn't meet the requirement to solve the problem.

// SOLUTION 2:
// Save the first character, delete it from the fron of the array, and insert it at the back in the right order

const reverseString = function(stringArray) {
    for (let i = 0; i < stringArray.length; i++) {
        let character = stringArray[0];
        stringArray.shift();
        stringArray.splice((stringArray.length - i), 0, character);
    }
    return stringArray;
};