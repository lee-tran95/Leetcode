// Given the root of a binary tree, find the  lowest violatinig node of valid binary search tree (BST).

// A valid BST is defined as follows:

// The left 
// subtree
//  of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

function violatinigNode(root){
    let violating = -1
    function dfs(root,min,max){
        if(!root) return;
        let left = dfs(min,root.value)
        let right = dfs(root.value,max)

        if(root.value <= max || root.value >= max && violating === -1) violating = root.value
        return
    }
    dfs(root,-Infinity,Infinity)
    return violating
}