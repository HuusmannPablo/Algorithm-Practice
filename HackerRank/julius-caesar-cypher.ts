// Julius Caesar protected his confidential information by encrypting it using a cipher. 
// Caesar's cipher shifts each letter by a number of letters. 
// If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
// In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

// Original alphabet:      abcdefghijklmnopqrstuvwxyz
// Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc

// Example
// s = 'middle-Outz'
// k = 2

// There are 2 spaces in s, so n = 10 of letters are left.  
// Rotating the alphabet by k = 2,  we get:

// Original alphabet:      abcdefghijklmnopqrstuvwxyz
// Alphabet rotated +2:    cdefghijklmnopqrstuvwxyzab

// Function Description

// Complete the caesarCipher function in the editor below.

// caesarCipher has the following parameter(s):

// string s: cleartext
// int k: the alphabet rotation factor

// Returns
// string: the encrypted string
// Input Format

// The first line contains the integer, n, the length of the unencrypted string.
// The second line contains the unencrypted string, s.
// The third line contains k, the number of letters to rotate the alphabet by.

function caesarCipher(s: string, k: number): string {

    // Initialize the result string
    let result = '';

    // Loop through the string s
    for (let i = 0; i < s.length; i++) {

        // Get the charCode of the current character
        let charCode = s.charCodeAt(i);

        // If the charCode is between 65 and 90, it is an uppercase letter
        if (charCode >= 65 && charCode <= 90) {

            // Add the character to the result string
            result += String.fromCharCode(((charCode - 65 + k) % 26) + 65);

        // If the charCode is between 97 and 122, it is a lowercase letter
        } else if (charCode >= 97 && charCode <= 122) {

            // Add the character to the result string
            result += String.fromCharCode(((charCode - 97 + k) % 26) + 97);

        // If the charCode is not a letter, add the character to the result string
        } else {

            // Add the character to the result string
            result += s[i];
        }
    };

    // Return the result string
    return result;
};
