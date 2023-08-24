// Implement a simple text editor. 
// The editor initially contains an empty string, S. 
// Perform Q operations of the following 4 types:

// 1. append(W) - Append string W to the end of S.
// 2. delete(k) - Delete the last k characters of S.
// 3. print(k) - Print the kth character of S.
// 4. undo() - Undo the last (not previously undone) operation of type 1 or 2, reverting S to the state it was in prior to that operation.

// Input Format
// The first line contains an integer, Q, denoting the number of operations.
// Each line i of the Q subsequent lines (where 0 <= i < Q) defines an operation to be performed.
// Each operation starts with a single integer, t (where t ∈ {1, 2, 3, 4}), 
// denoting a type of operation as defined in the Problem Statement above.
// If the operation requires an argument, t is followed by its space-separated argument.
// For example, if t = 1 and W = 'abcd', line i will be 1 abcd.

function textEditor(input: string) {
    
    // Initiallize the string S
    let S: string = '';
    // Transform the input into an array
    let inputArray: string[] = input.split('\n');
    // Get the number of operations
    let Q = parseInt(inputArray[0]);
    // Create a stack to store the string S, and an index to keep track of the stack
    let stack = [S];
    let index = 0;

    // loop through the operations
    for (let i = 1; i <= Q; i++) {

        // If the operation is 1
        if (inputArray[i][0] === '1') {
            // Append the string to S
            S = S.concat(inputArray[i].slice(2));
            // Push the new S to the stack
            stack.push(S);
            // Increment the index
            index++;
        
        // If the operation is 2
        } else if (inputArray[i][0] === '2') {
            // Delete the last k characters of S
            S = S.slice(0, S.length - parseInt(inputArray[i].slice(2)));
            stack.push(S);
            index++;
        
        // If the operation is 3
        } else if (inputArray[i][0] === '3') {
            // Print the kth character of S
            console.log(S[parseInt(inputArray[i].slice(2)) - 1]);
        
        // If the operation is 4
        } else if (inputArray[i][0] === '4') {
            // Undo the last operation
            if (index > 0) {
                // remove the last element of the stack
                stack.pop();
                // decrement the index
                index--;
                // set S to the last element of the stack
                S = stack[index];
          };
        };
    };
};
