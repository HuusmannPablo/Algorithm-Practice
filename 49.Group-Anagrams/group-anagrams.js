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

    //edge case:
    //if length of array is 1, return array

    // map the array (for loop)
    // take first string and store it in a new array
    // take the second string and compare with first one
    // split.sort.join === 
        // if it is an anagram store it with it
        // If its not an anagram store it in a second array

    // return new array
    let sortedAnagrams = [];
    if(strs.length == 1) return strs;

    for(let i = 0; i < strs.length; i++) {
        let sortedString = strs[i].split('').sort().join('')

        // add the word to the final array (?)
        sortedAnagrams[x].pop(strs[i]);
    }

};
