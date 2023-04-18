class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:

        # Firstly, I split the string to generate an array of the words
        arrayOfStrings = s2.split(" ")

        # I reverse each of the words that are in the array
        reversedArray = [word[::-1] for word in arrayOfStrings]

        # I join every element of the array
        reverseds2 = " ".join(reversedArray)

        # If s1 is contained in s2 or its reversed version, then return True, otherwise False
        if s1 in s2 or s1 in reverseds2:
            return True
        return False
