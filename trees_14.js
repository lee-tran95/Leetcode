// A binary tree is uni-valued if every node in the tree has the same value.

// Given the root of a binary tree, return true if the given tree is uni-valued, or false otherwise.

 

// Example 1:


// Input: root = [1,1,1,1,1,null,1]
// Output: true
// Example 2:


// Input: root = [2,2,2,5,2]
// Output: false

var isUnivalTree = function(root) {
    const val = root.val
    
    function dfs(root){
        
        if(!root) return true
        let left = dfs(root.left)
        let right = dfs(root.right)
        return root.val === val && left && right
    }
    
    return dfs(root)
};