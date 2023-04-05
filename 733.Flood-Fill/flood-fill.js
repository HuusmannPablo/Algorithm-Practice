// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, 
// plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

// Return the modified image after performing the flood fill.
// The color will be represented as a number

// Example 1:
// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), 
// all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

// Example 2:
// Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
// Output: [[0,0,0],[0,0,0]]
// Explanation: The starting pixel is already colored 0, so no changes are made to the image.

// After some research, I found that the best solution will be provided by implementing DFS(Depth First Search) or BFS(Birth First Search).

const floodFill = function(image, sr, sc, newColor) {
    // I set the currentColor as the color on the starting position
    const currentColor = image[sr][sc];
    // If the colors are the same, return as there is nothing else to do
    if(newColor === currentColor) return image;
    
    // Now I set up the function to check the 4 directions
    function callDFS(img, row, column) {
        // I set the bounderies:
        // If the position is out of the image, or if it doesn't have the same color, then return
        if (row >= img.length || row < 0 || column >= img[0].length || column < 0 || img[row][column] !== currentColor) return;

        // I set the color of the position to the new color
        img[row][column] = newColor;
        // And now I check the four directions of that position one by one
		callDFS(img, row - 1, column);  //up
        callDFS(img, row + 1, column);  //down
        callDFS(img, row, column + 1);  //right 
        callDFS(img, row, column - 1);  //left
        return img;
    }
    return callDFS(image, sr, sc);
};