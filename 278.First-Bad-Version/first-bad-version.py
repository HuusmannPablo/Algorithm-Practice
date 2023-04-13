# The isBadVersion API is already defined.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        bottom = 0
        top = n
        while top - bottom > 1:
            mid = (top + bottom) // 2
            if isBadVersion(mid):
                top = mid
            else:
                bottom = mid
        return top
