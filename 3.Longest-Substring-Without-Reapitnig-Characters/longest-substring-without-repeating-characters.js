// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.

// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

const lengthOfLongestSubstring = function(string) {
    if (!string) return 0;
    
    // Initializing variables
    const positions = {};
    let startIndex = 0;
    let maxLength = 0;
    
    for (let i = 0; i < string.length; i++) {
        const char = string.charAt(i);    
        
        if (positions[char] !== undefined && positions[char] >= startIndex) {
            maxLength = Math.max(maxLength, i - startIndex);
            startIndex = positions[char] + 1;
        }
        
        positions[char] = i;
    }
    
    maxLength = Math.max(maxLength, string.length - startIndex);
    
    return maxLength;
};