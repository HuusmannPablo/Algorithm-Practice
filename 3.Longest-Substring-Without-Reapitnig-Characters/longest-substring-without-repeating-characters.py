# This is the Python solution to the challenge, 
# using the same strategy as in the JavaScript solution.

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if not s:
            return 0
        
        positions = {}
        startIndex = 0
        maxLength = 0

        for i in range(len(s)):
            char = s[i]

            if char in positions and positions[char] >= startIndex:
                maxLength = max(maxLength, i - startIndex)
                startIndex = positions[char] + 1

            positions[char] = i

        maxLength = max(maxLength, len(s) - startIndex)

        return maxLength
    