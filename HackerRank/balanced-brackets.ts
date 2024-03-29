// A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

// Two brackets are considered to be a matched pair if the an opening bracket 
// (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) 
// of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

// A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. 
// For example, {[(])} is not balanced because the contents in between { and } are not balanced. 
// The pair of square brackets encloses a single, unbalanced opening bracket, (, and 
// the pair of parentheses encloses a single, unbalanced closing square bracket, ].

// By this logic, we say a sequence of brackets is balanced if the following conditions are met:
    // It contains no unmatched brackets.
    // The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.

// Given n strings of brackets, determine whether each sequence of brackets is balanced. 
// If a string is balanced, return YES. Otherwise, return NO.

// Function Description
// Complete the function isBalanced in the editor below.

// isBalanced has the following parameter(s):
    // string s: a string of brackets

// Returns
    // string: either YES or NO

// Input Format
// The first line contains a single integer n, the number of strings.
// Each of the next n lines contains a single string s, a sequence of brackets.


function isBalanced(s: string): string {
    
    // Initialize the stack
    const stack: string[] = [];
    
    // Initialize a map of opening and closing brackets
    const map: {[key: string]: string} = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    // Loop through the string
    for (let i = 0; i < s.length; i++) {

        // If the character is an opening bracket, push it to the stack
        if (map[s[i]]) {
            stack.push(map[s[i]]);

        // If the character is a closing bracket, pop the stack and compare
        } else if (s[i] !== stack.pop()) {

            // If the popped element doesn't match the current character, return 'NO'
            return 'NO';
        };
    };

    // If the stack is not empty, return 'NO'
    if (stack.length > 0) {
        return 'NO';
    };

    // If the stack is empty, return 'YES'
    return 'YES';
};
