# Rewritten solution in Python

# First line is taken from leetcode
def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
    
    # function to find the area of the island
    def findIslandArea(grid, row, column):

        # If the position is out bounderies, or if its not 1(water or visited), then keep going 
        if row >= len(grid) or row < 0 or column >= len(grid[0]) or column < 0 or grid[row][column] != 1:
            return 0

        # I set the position as visited by assigning a value of 2 (any value different from 1 would work)
        grid[row][column] = 2

        # Now I return the value of the cell I'm at, plus the 4 directions that have earth.
        return 1 + findIslandArea(grid, row + 1, column) + findIslandArea(grid, row - 1, column) + findIslandArea(grid, row, column + 1) + findIslandArea(grid, row, column - 1)

    # Initializing both variables, the counter and the max size yet
    biggestIsland = 0

    # looping through every row (y axis)
    for i in range(len(grid)):

        # Looping through every column bit in the i row
        for j in range(len(grid[0])):

            # I calculate the size of the island I found by running the function
            areaOfIsland = findIslandArea(grid, i, j)

            # If the island's area is bigger than the biggest, update the value
            if areaOfIsland > biggestIsland:
                biggestIsland = areaOfIsland

    return biggestIsland
