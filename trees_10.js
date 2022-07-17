// Given the root of a complete binary tree, return the number of the nodes in the tree.

// According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

// Design an algorithm that runs in less than O(n) time complexity.

 

// Example 1:


// Input: root = [1,2,3,4,5,6]
// Output: 6
// Example 2:

// Input: root = []
// Output: 0
// Example 3:

// Input: root = [1]
// Output: 1

var countNodes = function(root) {
    if(!root) return 0
    
    let leftNode = root.left;
    let leftHeight = 1;
    while(leftNode){
        leftNode = leftNode.left
        leftHeight++
    }
    
    let rightNode = root.right;
    let rightHeight = 1;
    while(rightNode){
        rightNode = rightNode.right
        rightHeight++
    }
    
    if(leftHeight === rightHeight) return Math.pow(2,leftHeight) - 1
    
    const left = countNodes(root.left)
    const right = countNodes(root.right)
    
    return  left + right + 1
};