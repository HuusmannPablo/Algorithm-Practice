# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        newList = None
        current = head

        while current != None:
            newNode = ListNode(current.val)
            newNode.next = newList
            newList = newNode
            current = current.next
        
        return newList
