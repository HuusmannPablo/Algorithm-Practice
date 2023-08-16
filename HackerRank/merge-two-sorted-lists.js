// Given pointers to the heads of two sorted linked lists, merge them into a single, sorted linked list. Either head pointer may be null meaning that the corresponding list is empty.

// Example
    // headA refers to 1 -> 3 -> 5 -> null 
    // headB refers to 1 -> 2 -> null

// The new list is 1 -> 1 -> 2 -> 3 -> 5 -> null

// Function Description
    // Complete the mergeLists function in the editor below.

// mergeLists has the following parameters:
    // SinglyLinkedListNode pointer headA: a reference to the head of a list
    // SinglyLinkedListNode pointer headB: a reference to the head of a list

// Returns
    // SinglyLinkedListNode pointer: a reference to the head of the merged list

// Input Format

// The first line contains an integer t, the number of test cases.

// The format for each test case is as follows:
    // The first line contains an integer n, the length of the first linked list.
    // The next n lines contain an integer each, the elements of the linked list.
    // The next line contains an integer m, the length of the second linked list.
    // The next m lines contain an integer each, the elements of the second linked list.

function mergeLists(head1, head2) {

    if (!head1) return head2;
    if (!head2) return head1;
    
    let head = null;
    let current = null;
    
    while (head1 && head2) {
        if (head1.data < head2.data) {
            if (!head) {
                head = head1;
                current = head;
            } else {
                current.next = head1;
                current = current.next;
            };
            head1 = head1.next;
        } else {
            if (!head) {
                head = head2;
                current = head;
            } else {
                current.next = head2;
                current = current.next;
            };
            head2 = head2.next;
        };
    };
    
    if (head1) {
        current.next = head1;
    };
    
    if (head2) {
        current.next = head2;
    };
    
    return head;
};
