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

// SOLUTION 1: This solution doesn't use a queue class with functions, but it passes all the test cases.
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

// SOLUTION 2: This solution uses a queue class, but the same logic as solution 1.
function processData(input) {
    
    // create a queue class
    class Queue {
        constructor() {
            this.queue = [];
        }

        // enque function to add an element to the queue
        enqueue(element) {
            this.queue.push(element);
        }

        // dequeue function to remove an element from the queue
        dequeue() {
            if (this.queue.length === 0) {
                return 'Queue is empty';
            } else {
                return this.queue.shift();
            }
        }

        // print function to print the first element of the queue
        print() {
            if (this.queue.length === 0) {
                return 'Queue is empty';
            } else {
                console.log(this.queue[0]);
                return
            }
        }
    };

    // create a new queue
    const queue = new Queue();

    // split the input into an array of strings
    const inputArr = input.split('\n');
    // console.log(inputArr);

    // remove the first element (number of queries)
    inputArr.shift();
    // console.log(inputArr);

    // loop through the input array
    for (let i = 0; i < inputArr.length; i++) {
        // if the input starts with 1
        if (inputArr[i][0] === '1') {
            // then split the string after the space and push the rest of the string into the queue
            let elementToEnqueue = inputArr[i].split(' ');
            // Enqueue element x into the end of the queue.
            queue.enqueue(elementToEnqueue[1]);

        } else if (inputArr[i][0] === '2') {
            // Dequeue the element at the front of the queue.
            queue.dequeue();

        } else if (inputArr[i][0] === '3') {
            // Print the element at the front of the queue.
            queue.print();
        };
    };
};
