// 111. Minimum Depth of Binary Tree

// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 2

var minDepth = function(root) {
    if(!root) return 0

    if(!root.right) return 1 + minDepth(root.left)
    if(!root.left) return 1 + minDepth(root.right)

    return 1 + Math.min(minDepth(root.left), minDepth(root.right))
};