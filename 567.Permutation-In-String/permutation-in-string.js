// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:
// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

const checkInclusion = function(s1, s2) {
    // Transforming string into array
    let arrayOfStrings = s2.split(" ");
    // Reversing the order of the array
    let reversedArray = arrayOfStrings.map(word => word.split("").reverse().join(""));
    // Join the array to form a string (now reversed)
    let reverseds2 = reversedArray.join(" ");
    // Checking if the reversed string includes s1
    if(reverseds2.includes(s1)) {
        return true
    }
    return false

};
