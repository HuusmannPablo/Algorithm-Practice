// A queue is an abstract data type that maintains the order in which elements were added to it, 
// allowing the oldest elements to be removed from the front and new elements to be added to the rear. 
// This is called a First-In-First-Out (FIFO) data structure because the first element added to 
// the queue (i.e., the one that has been waiting the longest) is always the first one to be removed.

// A basic queue has the following operations:
    // Enqueue: add a new element to the end of the queue.
    // Dequeue: remove the element from the front of the queue and return it.

// In this challenge, you must first implement a queue using two stacks. Then process q queries, 
// where each query is one of the following 3 types:
    // 1 x: Enqueue element x into the end of the queue.
    // 2: Dequeue the element at the front of the queue.
    // 3: Print the element at the front of the queue.

// Input Format
// The first line contains a single integer, q, denoting the number of queries.
// Each line i of the q subsequent lines contains a single query in the form described in 
// the problem statement above. All three queries start with an integer denoting the query type, 
// but only query 1 is followed by an additional space-separated value, x, 
// denoting the value to be enqueued.

// SOLUTION 1: This solution doesn't use a queue, but it passes all the test cases.
            // This problem can be solved without using a queue. 
function processData(input) {

    // Initialize an empty queue
    const queue = [];

    // Split the input into an array of strings
    // console.log(input);
    const inputArr = input.split('\n');
    console.log(inputArr);
    
    // remove first element (number of queries)
    inputArr.shift();

    // Loop through the input array
    for (let i = 0; i < inputArr.length; i++) {
        
        // if the input starts with 1
        if(inputArr[i][0] === '1') {

            // then split the string after the space and push the rest of the string into the queue
            let elementToEnqueue = inputArr[i].split(' ');
            // Enqueue element x into the end of the queue.
            queue.push(elementToEnqueue[1]);

        } else if (inputArr[i][0] === '2') {

            // Dequeue the element at the front of the queue.
            queue.shift();
        
        } else if (inputArr[i][0] === '3') {
            
            // Print the element at the front of the queue.
            console.log(queue[0]);
        };
    };
    return queue;
};

// SOLUTION 2: This solution uses a queue
function processData(input) {
    //Enter your code here
        // create a queue = {}
        // loop through the input
            // if the input starts with:
                // 1 x: Enqueue element x into the end of the queue.
                // 2: Dequeue the element at the front of the queue.
                // 3: Print the element at the front of the queue.
        // return the queue
    

}
