// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

var levelOrder = function(root) {
    if(!root) return []
    const res = []
    const q = [root]
    while(q.length > 0){
        let size = q.length;
        const level = []
        for(let i = 0; i < size; i++){
            const current = q.shift();
            level.push(current.val)
            if(current.left) q.push(current.left)
            if(current.right) q.push(current.right)
        }
        res.push(level)
    }
    return res
};