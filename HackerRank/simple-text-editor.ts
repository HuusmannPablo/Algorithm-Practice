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

function processData(input: string) {
    //Enter your code here
    // make a copy of S in case I need to revert to last S
    // 1 = append or concat string
    // 2 = delete, split string at k character and get rid of second part
    // 3 = print, console.log(S[k-1])
    // 4 = undo, S = Sprior

    // create a stack of S strings. I can add to the stack when I append or delete
    // and add 1 to a counter. When I undo, I can pop the stack and subtract 1 from the counter
    // this needs to solve the issue of getting consecutive undo commands
    

    let S = '';
    input = input.split('\n');
    let Q = parseInt(input[0]);
    let stack = [S];
    let index = 0;

    for (let i = 1; i <= Q; i++) {
        if (input[i][0] === '1') {
          S = S.concat(input[i].slice(2));
          stack.push(S);
          index++;
        } else if (input[i][0] === '2') {
          S = S.slice(0, S.length - parseInt(input[i].slice(2)));
          stack.push(S);
          index++;
        } else if (input[i][0] === '3') {
          console.log(S[parseInt(input[i].slice(2)) - 1]);
        } else if (input[i][0] === '4') {
          if (index > 0) {
            stack.pop();
            index--;
            S = stack[index];
          };
        };
    };


        // let [operationType, k] = input[i].split(' ');
        // if (operationType === '1') {
        //     Sprior = S;
        //     S = S.concat(k);
        // } else if (operationType === '2') {
        //     Sprior = S;
        //     S = S.slice(0, S.length - parseInt(k));
        // } else if (operationType === '3') {
        //     console.log(S[parseInt(k) - 1]);
        // } else if (operationType === '4') {
        //     S = Sprior;
        // };
    };
    // let i = 1;
    // while (i <= Q) {
    //     let [t, k] = input[i].split(' ');
    //     if (t === '1') {
    //         Sprior = S;
    //         S = S.concat(k);
    //     } else if (t === '2') {
    //         Sprior = S;
    //         S = S.slice(0, S.length - parseInt(k));
    //     } else if (t === '3') {
    //         console.log(S[parseInt(k) - 1]);
    //     } else if (t === '4') {
    //         S = Sprior;
    //     }
    //     i++;
    // };
}; 
