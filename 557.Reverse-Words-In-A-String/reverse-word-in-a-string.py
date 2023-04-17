class Solution:
    def reverseWords(self, string: str) -> str:
        # Firstly, I split the string to generate an array of the words
        arrayOfStrings = string.split(" ")
        
        # I reverse each of the words that are in the array 
        reversedArray = [word[::-1] for word in arrayOfStrings]

        # I join every element of the array
        reversedString = " ".join(reversedArray)
        
        return reversedString
    