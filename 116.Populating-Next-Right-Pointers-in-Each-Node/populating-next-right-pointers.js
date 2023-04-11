// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. 
// The binary tree has the following definition:

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }

// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

// Example 1:

//  Original Tree
//         1
//       /   \
//     2       3
//   /  \     / \
// 4     5   6   7

//  Modified Tree
//         1 -> null(#)
//       
//     2  ->   3 -> null(#)
//   
// 4  ->  5  ->  6  ->  7  -> null(#)

// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
// Explanation: Given the above perfect binary tree, your function should populate each next pointer to point to its next right node, 
// just like in the modified tree. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

// Example 2:
// Input: root = []
// Output: []

// To understand the structure of the tree and its properties, for the example 1:
// root = 1
// root.left = 2        left children
// root.right = 3       right children
// root.next = null     horizontally to the right, hence out of the tree in this case

const connect = function(root) {

    // If there is no root, return
    if (!root) return root;

    // If there is no left children of the node, return
    if (!root.left) return root;

    // What follows the left children is the right children 
    root.left.next = root.right;

    // If the next node is not null (not the edge of tree)
    if (root.next != null) {
        // then after the right children, it will come the left children of the next pointer
        root.right.next = root.next.left
    } else {
        // Otherwise, we are at end of the current level, and we return null
        root.right.next = null
    }

    // Check the children
    connect(root.left);
    connect(root.right);

    return root;
};
