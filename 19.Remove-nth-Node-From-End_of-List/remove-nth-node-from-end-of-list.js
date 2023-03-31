// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1: 
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]

// SOLUTION 1: with the use of two pointers
const removeNthFromEnd = function(head, n) {
   let fastPointer = head;
   let slowPointer = head;
   
    // I drive the fast pointer from the start (head of the linked list)
    // to the nth node
    for (let i = 0; i < n; i++) {
        fastPointer = fastPointer.next;
    }

    // For the boundary case where n = length of the Linked List, the fastPointer
    // will fall outside the bounderies of the LL, and this means we need to delete
    // the first node
    if(!fastPointer) {
        return head.next;
    }

    // Now we drive the two pointers at the same "speed" to the endo of the LL
    // Obviously the fastPointer will reach that place in length - n times, 
    // which means the slowPointer will be seating on the node we need to delete
    while(fastPointer && fastPointer.next) {
        fastPointer = fastPointer.next;
        slowPointer = slowPointer.next;
    }

    // Now we delete the node
    slowPointer.next = slowPointer.next.next;

    return head;
};