class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        if len(nums) < 0:
            return 0
        
        if len(nums) == 1:
            nums[0] = nums[0] * nums[0]
            return nums
        
        for i in range(len(nums)):
            temp = nums[i] * nums[i]
            nums[i] = temp
        
        nums.sort()
        return nums
    