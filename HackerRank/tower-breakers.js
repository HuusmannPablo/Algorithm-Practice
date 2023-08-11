// Two players are playing a game of Tower Breakers! Player 1 always moves first, 
// and both players always play optimally.The rules of the game are as follows:

// Initially there are n towers.
// Each tower is of height m.
// The players move in alternating turns.
// In each turn, a player can choose a tower of height x and reduce its height to y, 
// where 1 <= y < x and y evenly divides x.
// If the current player is unable to make a move, they lose the game.
// Given the values of n and m, determine which player will win. 
// If the first player wins, return 1. Otherwise, return 2.

// Example. n = 2, m = 6

// There are 2 towers, each 6 units tall. Player 1 has a choice of two moves:
// - remove 3 pieces from a tower to leave 3 as 6 modulo 3 = 0 
// - remove 5 pieces to leave 1

// Let Player 1 remove 3. Now the towers are 3 and 6 units tall.

// Player 2 matches the move. Now the towers are both 3 units tall.

// Now Player 1 has only one move.

// Player 1 removes 2 pieces leaving 1. Towers are 1 and 2 units tall.
// Player 2 matches again. Towers are both 1 unit tall.

// Player 1 has no move and loses. Return 2.

// Function Description
    // Complete the towerBreakers function in the editor below.

// towerBreakers has the following paramter(s):
    // int n: the number of towers
    // int m: the height of each tower

// Returns
    // int: the winner of the game

// Input Format
    // The first line contains a single integer t, the number of test cases.
    // Each of the next t lines describes a test case in the form of 2 space-separated integers, n and m.

// Constraints
    // 1 <= t <= 100
    // 1 <= n, m <= 10^6

function towerBreakers(n, m) {

    // After analyzing the problem, and reading other's peoples opinions, 
    // I realized all it matters is the value of n and m. 
    // No strategy is needed to be translated to code as I did below this answer.
    // If n is even or m is 1, player 2 wins
    return (n % 2 === 0 || m === 1) ? '2' : '1';


    // // My first attempt to create the game mechanics
    // // Initialize array of towers
    // let towers = [];
    // for (let i = 0; i < n; i++) {
    //     towers.push(m);
    // };
    // // Initialize player
    // let player = 1;

    // // While there are still towers
    // while (towers.length > 0) {

    //     // Initialize tower index
    //     let towerIndex = 0;
    //     // Initialize tower height
    //     let towerHeight = towers[0];
    //     // Iterate through towers
    //     for (let i = 0; i < towers.length; i++) {
    //         // If the tower is shorter than the current tower height
    //         if (towers[i] < towerHeight) {
    //             // Update tower index
    //             towerIndex = i;
    //             // Update tower height
    //             towerHeight = towers[i];
    //         };
    //     };
    //     // If the tower height is 1
    //     if (towerHeight === 1) {
    //         // Remove the tower
    //         towers.splice(towerIndex, 1);
    //     } else {
    //         // Remove pieces from the tower
    //         towers[towerIndex] -= 1;
    //     };

    //     // Switch player
    //     player = player === 1 ? 2 : 1;
    // }
    // // Return the winner
    // return player;

};
