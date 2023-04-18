class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        arrayOfStrings = s2.split(" ")
        reversedArray = [word[::-1] for word in arrayOfStrings]
        reverseds2 = " ".join(reversedArray)
        if s1 in s2 or s1 in reverseds2:
            return True
        return False
