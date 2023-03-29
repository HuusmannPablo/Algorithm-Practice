// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order. 

// Example 1:
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Example 2:
// Input: s = "God Ding"
// Output: "doG gniD"

const reverseWords = function(string) {
    let arrayOfStrings = string.split(" ");
    const reversedArray = arrayOfStrings.map(word => word.split("").reverse().join(""));
    let reversedString = reversedArray.join(" ")
    return reversedString
};
