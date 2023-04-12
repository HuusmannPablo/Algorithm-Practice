class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        indexOfTarget = nums.index(target) if target in nums else -1
        if indexOfTarget != -1:
            return indexOfTarget
        else:
            nums.append(target)
            sortedNums = sorted(nums)
            return sortedNums.index(target)
        