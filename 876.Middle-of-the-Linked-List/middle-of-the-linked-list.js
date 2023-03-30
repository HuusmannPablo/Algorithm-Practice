// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// Although the input is presented as an array, it is actually a linked list!
// SOLUTION 1: (for arrays)
// const middleNode = function(head) {
//     let length = head.length;
//     const middleIndex = Math.floor(length / 2);
//     const slicedHead = head.slice(middleIndex);
//     return slicedHead
// };

// middleNode([1,2,3,4,5]);
// middleNode([1,2,3,4,5,6]);

// SOLUTION 2: (for Single Linked Lists)
let middleNode = function(head) {
    let length = 0;
    let node = head;
    // I calculate the length of the inked list
    while (node !== null) {
        length += 1;
        node = node.next;
    }
    // I get the middle point
    let middleNode = Math.floor(length/2);
    // I need to redefine node as my original linked list 
    node = head;
    // I link all the nodes
    for (let i=0; i < middleNode; i++) {
        node = node.next;
    }
    return node;
};