// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.

// Example 1:
// Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
// Output: [[0,0,0],[0,1,0],[0,0,0]]

// Example 2:
// Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
// Output: [[0,0,0],[0,1,0],[1,2,1]]

const updateMatrix = function(matrix) {
    
    // Loop over the full matrix to find all zeroes first.
    // Add those to a queue and start a BFS, writing down a number +1 
    // of the position we find in the Q. That way, all the neigbors of the zeroes will become 1's
    // all their neighbors 2's etc.
    // As we're looking for the initial set of zeroes, mark the others as infinity
    // because we don't want to get confused with future 1s we want to write down.
   
    let lengthX, lengthY;
    
    let q = [];        
    
    // Find all zeroes in the matrix
    for ( let i = 0, lengthX = matrix.length; i < lengthX; i++) { 
        for ( let j = 0, lengthY = matrix[0].length; j < lengthY; j++) {   
            if (matrix[i][j] === 0) {
                // The zeroes are obviously at zero. 
                q.push([i, j, 0]);
            } else {
                matrix[i][j] = Infinity;
            }  
        } 
    }
    
    // I define the directions I will search.
    let directionSearch = [[1,0],[0,1],[-1,0],[0,-1]];
    
    while (q.length) {
        let pos = q.shift();
        
        // write value if we find it's lower than current (like those infinities)
        if (matrix[pos[0]][pos[1]] > pos[2]) {
            matrix[pos[0]][pos[1]] = pos[2];
        }
        
        // Look at all neighbor positions. Are they on the board? Are they not yet visited?
        // If yes to both, add to the q, with an increased "level" param at pos [2] 
        directionSearch.forEach(function(d) {
            let next = [pos[0] + d[0], pos[1] + d[1], pos[2] + 1];

            // Are the next coordinates valid?
            if (next[0] > -1 && next[0] < matrix.length && next[1] > -1 && next[1] < matrix[0].length) {

                // is it not marked?
                if (matrix[next[0]][next[1]] === Infinity) {

                    // add to q, but with increased index, which I stored at pos[2]
                    q.push(next);
                }
            }
        });
    }
    return matrix;
};
