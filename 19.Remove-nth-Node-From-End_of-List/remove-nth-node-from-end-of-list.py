# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        fastPointer = head
        slowPointer = head

        for i in range(n):
            fastPointer = fastPointer.next
        
        if not fastPointer:
            return head.next
        
        while fastPointer and fastPointer.next:
            fastPointer = fastPointer.next
            slowPointer = slowPointer.next
        
        slowPointer.next = slowPointer.next.next

        return head
