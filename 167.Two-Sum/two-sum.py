class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        answerArray = []
        for i in range(len(numbers)):
            numberToFind = target - numbers[i]
            trialIndex = self.binarySearch(numbers, numberToFind)
            if trialIndex < len(numbers) and numbers[trialIndex] == numberToFind:
                if trialIndex == i:
                    answerArray[0] = i + 1
                    answerArray[1] = trialIndex + 2
                else:
                    answerArray[0] = i + 1
                    answerArray[1] = trialIndex + 1
                break
        return answerArray
    
    def binarySearch(self, numbers, numbersToFind):
        leftLimitIndex = 0
        rightLimitIndex = len(numbers)

        while leftLimitIndex < rightLimitIndex:
            middleIndex = leftLimitIndex + (rightLimitIndex - leftLimitIndex) // 2
            if numbers[middleIndex] >= numbersToFind:
                rightLimitIndex = middleIndex
            else:
                leftLimitIndex = middleIndex + 1
        return leftLimitIndex
              