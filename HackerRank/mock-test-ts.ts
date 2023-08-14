// Given a string of lowercase letters in the range a-z, 
// determine the index of a character that can be removed to make the string a plindrome.
// There may be more than one solution, but any will do.
// For example, if your string is "bcbc", you can either remove 'b' at index 0 or 'c' at index 3.
// If the word is already a palindrome or there is no solution, return -1. Otherwise, return the index of a character to remove.

// Complete the palindromeIndex function below.
function palindromeIndex(s: string): number {
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        if (s[start] !== s[end]) {
            if (isPalindrome(s, start + 1, end)) {
                return start;
            }
            if (isPalindrome(s, start, end - 1)) {
                return end;
            }
            return -1;
        }
        start++;
        end--;
    }
    return -1;
};

function isPalindrome(s: string, start: number, end: number): boolean {
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};
