class Solution:
    def reverseString(self, s: List[str]) -> None:
        for i in range(len(s)):
            character = s[0]
            s.pop(0)
            s.insert(len(s) - i, character)
        return s