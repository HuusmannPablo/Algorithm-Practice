class Solution:
    def rotate(self, list: List[int], steps: int) -> None:
        for i in range(steps):
            lastNumber = list[len(list) - 1]
            list.pop()
            list.insert(0, lastNumber)
        return list
    