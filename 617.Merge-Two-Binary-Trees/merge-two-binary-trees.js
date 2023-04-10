// You are given two binary trees root1 and root2.

// Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. 
// You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. 
// Otherwise, the NOT null node will be used as the node of the new tree.

// Return the merged tree.

// Note: The merging process must start from the root nodes of both trees.

// Example 1:
// Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// Output: [3,4,5,5,4,null,7]

// Example 2:
// Input: root1 = [1], root2 = [1,2]
// Output: [2,2]


// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
//  }

const mergeTrees = function(root1, root2) {
    function depthFirstSearch(r1, r2){

        // If none of the trees have a node, return null
        if (!r1 && !r2) return null;

        // If root1 value is null, return root2 value
        if (!r1) return r2;
        
        // If root2 value is null, return root1 value\
        if (!r2) return r1;

        // If root1 and 2 have a value, I need to add them and return the value
        r1.val += r2.val;

        // And now I check the left and right of the node for more values
        r1.left = depthFirstSearch(r1.left, r2.left);
        r1.right = depthFirstSearch(r1.right, r2.right);

        return r1;
    }
    return depthFirstSearch(root1, root2);
};
