// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.

// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
// Return the minimum number of minutes that must elapse until no cell has a fresh orange. 
// If this is impossible, return -1.

// Example 1:
// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4

// Example 2:
// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

// Example 3:
// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

const orangesRotting = function(grid) {

    // Initialize queue for our BFS, Number of fresh oranges, and time to be returned.
    let queue = [], freshOranges = 0, time = 0;
  
    // If we find a fresh orange, increment orange count.
    // If we find a rotten one, add it to the queue.
    for (let row = 0; row < grid.length; row++) {
        for (let column = 0; column < grid[row].length; column++) {
        if (grid[row][column] === 1) freshOranges++
        else if (grid[row][column] === 2) queue.push([row, column, 0]);
        }
    }
        
    // Initialize directions tocheck the 4 neighbors during our BFS
    const directions = [[0,1], [1,0], [0,-1], [-1,0]];

    // Initialize endOfRow and endOfColumn to make sure neighbor coords are within the grid.
    const endOfRow = grid.length - 1, endOfColumn = grid[0].length - 1;
    
    // Loop while queue is not empty and there are still fresh oranges.
    while (queue.length && freshOranges) {
    
        // Each queue entry has a row, column and number of minutes taken for infection to reach.
        const [currentRow, curC, mins] = queue.shift();
        
        //If orange is still fresh, we mark it as rotten, decrement our fresh oranges
        //count and set time to = mins.  Since we BFSing, the time it takes to infect
        //the last orange will be the time to infect all.  Once all oranges have
        //been infected, our orange count will = 0 and our condition in while loop
        //will stop the loop.  Time can then be returned.
        if (grid[currentRow][curC] === 1) {
        grid[currentRow][curC] = 2;
        freshOranges--;
        time = mins;
        }

        //Here's where our dir array above comes in handy.  We destructure
        //each entry and add it to our current to get neighbor coords below.
        for (let [addR, addC] of directions) {
        
        //Here we obtain our new or neighbor coordinates by adding currentRow
        //and addRow of dir.  Same for col.
        const [newR, newC] = [currentRow + addR, curC + addC];
        
        //Here we check to make sure new coordinates lie within the grid.
        if (newR < 0 || newR > endOfRow || newC < 0 || newC > endOfColumn) continue;
        
        //If neighbor coord is valid, and there is a fresh orange at those coordinates
        //we push coordinates to our BFS to be infected next.  We also increment the
        //mins count to track time taken to spread to that orange.
        if (grid[newR][newC] === 1) {
            queue.push([newR, newC, mins + 1])
        }
        }
    }
    
    //If we still have uninfected oranges, we return -1 because it won't spread
    //to all.  Otherwise, we simply return the time from initial infected to last
    //infected orange.
    return freshOranges ? -1 : time;
};