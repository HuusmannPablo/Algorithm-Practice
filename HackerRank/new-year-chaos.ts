// It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating 
// their initial position in the queue from 1 to n. 
// Any person can bribe the person directly in front of them to swap positions, 
// but they still wear their original sticker. One person can bribe at most two others.

// Determine the minimum number of bribes that took place to get to a given queue order. 
// Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

// Example

// q = [1,2,3,5,4,6,7,8]

// If person 5 bribes person 4, the queue will look like this: 1,2,3,5,4,6,7,8. 
// Only 1 bribe is required. Print 1.

// q = [4,1,2,3]

// Person 4 had to bribe 3 people to get to the current position. Print Too chaotic.

// Function Description
// Complete the function minimumBribes in the editor below.

// minimumBribes has the following parameter(s):
    // int q[n]: the positions of the people after all bribes

// Returns
    // No value is returned. Print the minimum number of bribes necessary or Too chaotic 
    // if someone has bribed more than 2 people.

function minimumBribes(q: number[]): void {

    // SOLUTION 1: problem is the logic of the else statement. 
    // let bribesCount: number = 0;
    // for(let i = 0; i < q.length; i++) {
    //     if(q[i] - (i+1) > 2) {
    //         console.log("Too chaotic")
    //         return
    //     } else {
    //         bribesCount += 1;
    //     }
    // }
    // let totalBribes = Math.floor(bribesCount/2);
    // console.log(totalBribes);
    // return

    // SOLUTION 2:

    // Initialize the variables 
    let bribeCount: number = 0; 
    let isChaos: boolean = false;

    // Check if a number is ahead for more than two positions
    for(let i: number = 0; i < q.length; i++){
        if((q[i] - (i + 1) > 2)){

            // If yes, then chaos
            isChaos = true;
            console.log("Too chaotic");
            break;
        };  
    };

    // If no, then bubble sort adding 1 to counter for each swap
    // "reverse engineering" the bribes
    for(let k: number = 0; k < q.length; k++){
        for(let j: number = 0; j < q.length; j++){
            if(q[j] > q[j + 1]){
                bribeCount++;
                //Swap using destructuring
                [q[j], q[j + 1]] = [q[j + 1], q[j]];
            };
        };
    };

    // If no chaos, then print the number of bribes
    if(!isChaos){
        console.log(bribeCount);
    };
};
