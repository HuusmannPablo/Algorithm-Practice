// Given an array of strings strs, group the anagrams together. 
// You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

const groupAnagrams = function(strs) {

    // Create an object to store the sorted strings and group the answers together
    // The Key will be a sorted string
    // The value will be an array of strings
    // i.e. {'aet': ['tea', 'ate', 'eat']}
    const sortedAnagrams = {};

    // Loop through the entire array of strings
    for(let i = 0; i < strs.length; i++) {

        // Sort the string by spliting into letters, sorting them alphabetically, and joining them together into a string again
        const sortedString = strs[i].split('').sort().join('');

        // If there is a key in the object equal to the sorted string
        if(sortedAnagrams[sortedString]) {

            // Then add that string to the value of that key, pushing it into the array
            sortedAnagrams[sortedString].push(strs[i]);
        } else {

            // Otherwise, create a new Key with the sorted string, and add the string as the Value 
            sortedAnagrams[sortedString] = [strs[i]];
        }
    }

    // I return only the values of the object, so they will be an array of arrays
    return Object.values(sortedAnagrams);    
};
