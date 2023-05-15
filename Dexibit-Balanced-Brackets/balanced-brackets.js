// Problem: Bracket Balance

// Given a string consisting solely of brackets write a function to determine if the
// brackets are balanced
// An input string is balanced if:
// - Open brackets must be closed by the same type of brackets
// - Open brackets must be closed in the correct order
// - Every close bracket has a corresponding open bracket of the same type

// Input string allowed characters:
// [ { ( ] } )

// examples 1:
// Input: “()”
// Result: true

// example 2:
// Input: “(]”
// Result: false

// example 3:
// Input: “([]{})”
// Result: true

function isBracketBalanced(inputString) {
    // initialize the stack and the opening and closing brackets for further checking
    const stack = [];
    const openingBrackets = ['[', '{', '('];
    const closingBrackets = [']', '}', ')'];
    
    // I loop through the entire input string
    for (let i = 0; i < inputString.length; i++) {
      const bracket = inputString[i];
      
    // I check if the bracket is an opening bracket
        // I add it to stack if it is, and move to the next character
        // If it is a closing bracket, it will look for the opening bracket of the same type in stack, and remove it
      if (openingBrackets.includes(bracket)) {
        stack.push(bracket);
      } else if (closingBrackets.includes(bracket)) {
        const matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(bracket)];
        
        if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) {
          return false;
        }
      }
    }
    
    return stack.length === 0;
};

// Need to check for edge cases!!
  