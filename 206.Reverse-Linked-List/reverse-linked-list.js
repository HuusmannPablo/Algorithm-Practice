// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []

const reverseList = function(head) {
    
    // I initialize the new linked list that will have the reversed items
    // and set the value of current to head
    let newList = null;
    let current = head;

    // While there is a node in the head
    while(current !== null){

        // create a new node and set its value to the current node value of the head linked list
        let newNode = new ListNode(current.val);

        // add the value of this new node to the beginning of the new list
        newNode.next = newList;
        // update the newList to be the newNode
        newList = newNode;
        // Move to the next node on the original list
        current = current.next
    }
    // return the new list that contains the reversed elements
    return newList
};