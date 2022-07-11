// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

 

// Example 1:


// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
// Example 2:

// Input: root = [1,null,3]
// Output: [1,3]
// Example 3:

// Input: root = []
// Output: []

var rightSideView = function(root) {
    if(!root)  return [];
    const res = [];
    const q = [root];
    while(q.length > 0){
        const size = q.length;
        res.push(q[0].val)
        for(let i = 0; i < size; i++){
            const current = q.shift();
            if(current.right) q.push(current.right)
            if(current.left) q.push(current.left)
        }
    }
    return res
};