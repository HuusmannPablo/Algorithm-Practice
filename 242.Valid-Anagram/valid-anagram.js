// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

const isAnagram = function(s, t) {

    // Transform string into array
    let sArray = s.split('');
    let tArray = t.split('');
    console.log(sArray, tArray);

    // Sort the array alphabeticaly
    sArray.sort();
    tArray.sort();
    console.log(sArray, tArray);

    // Transform to string
    let sString = sArray.join();
    let tString = tArray.join();

    // Compare strings
    if(sString === tString) return true
    return false

};

// REFACTORED SOLUTION:

const isAnagram2 = function(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join(''); 
};


