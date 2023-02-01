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
    if(!root) return []
let q = [root]
let res = []

    while(q.length > 0){
        let length = q.length
        res.push(q[0].val)
        for(let i = 0; i < length; i++){
            let current = q.shift()
            if(current.right) q.push(current.right)
            if(current.left) q.push(current.left)
            
        }
    }
return res
};

/*O(n) time omplexity since we only visit each node once
  space complexity is the number of nodes at a given level
 */