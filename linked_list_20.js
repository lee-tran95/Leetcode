/*
'''
Find Siblings

We're given a tree, and we want to find all of the nodes in the tree that have siblings 
(other nodes under their parent).

Return an array of nodes representing each sibling in any order. 
No only children can be in your result array.
 

EXAMPLE(S)
      1
  2      3
_  4   _  _

should return [2, 3]

     12
  3      4
1  _   6  _

should return [3, 4]

        12
     3       4
  1   _    6   _
9  7      _ _

should return [3, 4, 9, 7]
 */

function findSiblingNodes(root) {
    const results = [];
  
    root && dfs(root);
  
    return results;
  
    function dfs(node) {
      if (node.left && node.right) {
        results.push(node.left.value, node.right.value);
      }
  
      if (node.left) dfs(node.left)
      if (node.right) dfs(node.right);
    }
  }
  
  class Node{
    constructor(value, left = null, right = null){
      this.value = value
      this.left = left
      this.right = right
    }
  }
  
  
  const root = new Node(12, new Node(3, new Node(1)), new Node(4, new Node(6)));
  
  const root2 = new Node(12, new Node(3, new Node(1, new Node(9), new Node(7))), new Node(4, new Node(6)));
  
  console.log(findSiblingNodes(null), []);
  console.log(findSiblingNodes(root), [3, 4])
  console.log(findSiblingNodes(root2), [3, 4, 9, 7])
  
  function findSiblingNodesBFS(root){
    if(!root) return []
    const result = [];
    const q = [root];
  
    while(q.length > 0){
      const curr = q.shift()
      if (curr.left && curr.right) result.push(curr.left.value, curr.right.value)
  
      if(curr.left) q.push(curr.left)
      if(curr.right) q.push(curr.right)
    }
    return result
  }
  
  console.log(findSiblingNodesBFS(null), []);
  console.log(findSiblingNodesBFS(root), [3, 4])
  console.log(findSiblingNodesBFS(root2), [3, 4, 9, 7])