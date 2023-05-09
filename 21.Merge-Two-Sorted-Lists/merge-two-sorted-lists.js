// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

const mergeTwoLists = function(list1, list2) {
    
    // I initialize a new list, and the head of that new list.
    // I will put all the values in this new list, in order
    let newList = new ListNode();
    let head = newList;

    // If I'm given two lists, then I'll check which value is lower (list 1 or 2) and insert that into the new list
    // then move to the next node on that list, and compare again. 
    while(list1 && list2) {
        if(list1.val <= list2.val) {
            newList.next = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            newList.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        newList = newList.next;
    }

    // If list1 is empty, return list 2
    if(!list1) {
        return list2
    }

    // If list 2 is empty, return list 1
    if(!list2) {
        return list1
    }

    return head.next

};