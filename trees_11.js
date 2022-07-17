// Given the root of a binary tree, each node in the tree has a distinct value.

// After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).

// Return the roots of the trees in the remaining forest. You may return the result in any order.

 

// Example 1:


// Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
// Output: [[1,2,null,4],[6],[7]]
// Example 2:

// Input: root = [1,2,4,null,3], to_delete = [3]
// Output: [[1,2,4]]

var delNodes = function(root, to_delete) {
    if(!root) return [];
        let res = new Set([root])
        to_delete = new Set(to_delete)
        
        function dfs(root,parent = null){
            if(!root) return;
            if(to_delete.has(root.val)){
                res.delete(root)
                if(root.left)res.add(root.left)
                if(root.right) res.add(root.right)
                
                if(parent){
                    if(parent.left === root){
                        parent.left =null
                    }else if(parent.right === root){
                        parent.right = null
                    }
                }
            }
            dfs(root.left,root)
            dfs(root.right,root)
        }
        dfs(root)
        return [...res]
    };