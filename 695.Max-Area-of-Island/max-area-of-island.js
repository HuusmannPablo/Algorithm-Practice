// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) 
// You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

// Example 1:
// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.

// Example 2:
// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0

const maxAreaOfIsland = function(grid) {
    // Initializing both variables, the counter and the max size yet
    let biggestIsland = 0;

    // looping through every row (y axis)
    for (let i = 0; i < grid.length; i++) {

        // Looping through every column bit in the i row
        for (let j = 0; j < grid[0].length; j++) {
            
            // I calculate the size of the island I found by running the function
            let areaOfIsland = findIslandArea(grid, i, j); 
            // If the island's area is bigger than the biggest, update the value
            if (areaOfIsland > biggestIsland) biggestIsland = areaOfIsland;
        }
    }
    return biggestIsland;

    // Now I set up the function to check the 4 directions
    function findIslandArea(grid, row, column) {

        // If the position is out bounderies, or if its not 1(water or visited), then keep going 
        if (row >= grid.length || row < 0 || column >= grid[0].length || column < 0 || grid[row][column] !== 1) return 0;

        // I set the position as visited by assigning a value of 2 (any value different from 1 or 0 would work)
        grid[row][column] = 2;

        // Now I return the value of the cell I'm at, plus the 4 directions that have earth.
        return 1 
            + findIslandArea(grid, row + 1, column)  // Up
            + findIslandArea(grid, row - 1, column)  // Down
            + findIslandArea(grid, row, column + 1)  // Right 
            + findIslandArea(grid, row, column - 1);  // Left
    }
};