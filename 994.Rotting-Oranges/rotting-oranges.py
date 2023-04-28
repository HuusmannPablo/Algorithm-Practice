class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        queue, freshOranges, time = [], 0, 0

        for row in range(len(grid)):
            for column in range(len(grid[row])):
                if grid[row][column] == 1:
                    freshOranges += 1
                elif grid[row][column] == 2:
                    queue.append([row, column, 0])

        directions = [[0,1], [1,0], [0,-1], [-1,0]]

        endOfRow, endOfColumn = len(grid) - 1, len(grid[0]) - 1

        while queue and freshOranges:
            currentRow, currentColumn, minutesToInfect = queue.pop(0)

            if grid[currentRow][currentColumn] == 1:
                grid[currentRow][currentColumn] = 2
                freshOranges -= 1
                time = minutesToInfect

            for addRow, addColumn in directions:
                newRow, newColumn = currentRow + addRow, currentColumn + addColumn

                if newRow < 0 or newRow > endOfRow or newColumn < 0 or newColumn > endOfColumn:
                    continue

                if grid[newRow][newColumn] == 1:
                    queue.append([newRow, newColumn, minutesToInfect + 1])

        return -1 if freshOranges else time
    