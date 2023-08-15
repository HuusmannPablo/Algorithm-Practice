// We define super digit of an integer x using the following rules:

// Given an integer, we need to find the super digit of the integer.
    // If x has only 1 digit, then its super digit is x.
    // Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.
// For example, the super digit of 9875 will be calculated as:

// 	super_digit(9875)   	9+8+7+5 = 29 
// 	super_digit(29) 	    2 + 9 = 11
// 	super_digit(11)		    1 + 1 = 2
// 	super_digit(2)		    = 2  

// Example
// n = 9875
// k = 4

// The number p is created by concatenating the string n k times so the initial p = 9875987598759875.

//     superDigit(p) = superDigit(9875987598759875)
//                   9+8+7+5+9+8+7+5+9+8+7+5+9+8+7+5 = 116
//     superDigit(p) = superDigit(116)
//                   1+1+6 = 8
//     superDigit(p) = superDigit(8)

// All of the digits of p sum to 116. The digits of 116 sum to 8. 8 is only one digit, so it is the super digit.

function superDigit(n: string, k: number): number {
    
    // SOLUTION 2: This one works and doesn't have the parseInt limitation
    if (n.length === 1) {
        return parseInt(n);
    } else {
        let sum = 0;
        for (const digit of n) {
            sum += parseInt(digit);
        }
        const newNumber = (sum * k).toString();
        return superDigit(newNumber, 1);
    };
};

//     SOLUTION 1: this one has the issue of parseInt having a limit of 18 characters of presicion.
//     console.log(n, k);
//     let fullString: string = n.repeat(k);
//     console.log(fullString);
//     let fullNumber: number = parseInt(fullString, 10);
//     console.log(fullNumber);
    
//     while(fullNumber > 9) {
//         fullNumber = sumDigits(fullNumber);
//         console.log(fullNumber);
//     };
//     return fullNumber;
// };

// function sumDigits(n: number): number {
//     let sum: number = 0;
//     while (n > 0) {
//         sum += n % 10;
//         n = Math.floor(n / 10);
//     };
//     return sum;
// };
