# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        newList = ListNode()
        last = newList

        if not list1:
            return list2
        
        if not list2:
            return list1
        
        while list1 and list2:
            if list1.val > list2.val:
                last.next = list2
                list2 = list2.next
            else:
                last.next = list1
                list1 = list1.next
            last = last.next

        last.next = list1 or list2

        return newList.next
        

        