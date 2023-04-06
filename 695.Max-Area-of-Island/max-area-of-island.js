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
    let biggestIslandYet = 0;
    let islandSizeCounter = 0;

    // looping through every row (y axis)
    for (let i = 0; i < grid.length; i++) {
        // Resetting the counter
        islandSizeCounter = 0;

        // Looping through every column bit in the i row
        for (let j = 0; j < grid[0].length; j++) {
            
            // Now I set up the function to check the 4 directions
            function callDFS(map, row, column) {
                // If the position is out bounderies, or if it 0(water), then keep going 
                if (row >= map.length || row < 0 || column >= map[0].length || column < 0 || map[row][column] === 0) return;

                // as the coordenate is earth, I add 1 to the counter
                islandSizeCounter += 1;

                // Now I check the 4 directions for more earth.
                callDFS(map, row - 1, column);  // Up
                callDFS(map, row + 1, column);  // Down
                callDFS(map, row, column + 1);  // Right 
                callDFS(map, row, column - 1);  // Left

                // I check if the island I have found is the biggest one yet
                if (biggestIslandYet > islandSizeCounter) {
                    biggestIslandYet = islandSizeCounter
                    return biggestIslandYet
                }
            }
            return callDFS(grid, i, j);
        }
    }
};