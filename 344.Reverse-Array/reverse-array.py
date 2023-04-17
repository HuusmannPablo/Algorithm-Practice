class Solution:
    def reverseString(self, s: List[str]) -> None:

        # For each element in the array's index:
        for i in range(len(s)):

            # Save the character
            character = s[0]
            # Remove the first element of the array (first character)
            s.pop(0)
            # Insert it back, counting i indexes from the end of the array
            s.insert(len(s) - i, character)
        return s
    