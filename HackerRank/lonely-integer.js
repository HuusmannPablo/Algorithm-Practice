// Given an array of integers, where all elements but one occur twice, 
// find the unique element.

// Example
// a = [1,2,3,4,3,2,1]
// The unique element is 4.

// Function Description
// lonelyinteger has the following parameter(s):
// int a[n]: an array of integers

// Returns
// int: the element that occurs only once

// Input Format
// The first line contains a single integer, n, the number of integers in the array.
// The second line contains n space-separated integers that describe the values in a.

// Constraints
// 1 <= n < 100
// It is guaranteed that n is an odd number and that there is one unique element.
// 0 <= a[i] <= 100, where 0 <= i < n.

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
};

function lonelyinteger(a) {
    // Write your code here
    // create an object {number: count} to count the appearance of each number
    // loop through the object and return the number with count = 1
    let counter = {};
    for (let i = 0; i < a.length; i++) {
        if (counter[a[i]]) {
            counter[a[i]]++;
        } else {
            counter[a[i]] = 1;
        }
    };
    return getKeyByValue(counter, 1);
};
