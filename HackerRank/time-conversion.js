// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: 
// - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example
// s = '12:01:00PM'
// Return '12:01:00'.
// s = '12:01:00AM'
// Return '00:01:00'.

// Function Description
// Complete the timeConversion function in the editor below. 
// It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):
// string s: a time in 12 hour format
// Returns
// string: the time in 12 hour format

// Input Format
// A single string s that represents a time in 12-hour clock format 
// (i.e.: hh:mm:ssAM or hh:mm:ssPM).

// Constraints
// All input times are valid

function timeConversion(s) {
    // Split the time on :
    // I'll end up with array[0] = hours, array[1] = minutes, array[2] = seconds + AM/PM
    let array = s.split(':');

    // If the time is PM and the hours are not 12, add 12 to the hours
    if (array[2].includes('PM') && array[0] != 12) {
        array[0] = parseInt(array[0]) + 12;

    // If the time is AM and the hours are 12, set the hours to 00
    } else if (array[2].includes('AM') && array[0] == 12) {
        array[0] = '00';
    }

    // Remove the AM/PM from the seconds
    array[2] = array[2].slice(0, 2);

    // Return the array joined on :
    return array.join(':');
};
