"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""

# This solution's logic is based on the JavaScript logic, for more informarmation or an explanation, please go to the JS file

class Solution:
    def connect(self, root: 'Optional[Node]') -> 'Optional[Node]':

        if not root or not root.left:
            return root
        
        root.left.next = root.right

        if root.next != None:
            root.right.next = root.next.left
        else: 
            root.right.next == None  
        
        self.connect(root.left)
        self.connect(root.right)

        return root
    