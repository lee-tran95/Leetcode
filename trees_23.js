/*
'''
❓ PROMPT
In many but not all languages, humans read from top to bottom, left to right. This problem is convert a tree to a list of values in this reading order. Since computer scientists draw trees with the root at the top, the first node we read is that one, followed by the nodes at the first level down (only at most two nodes), then the third level, etc. For example:

      a
    /  \
   b     c
 /
d

We would read this as [a, b, c, d].

Write a function that generates a list of the values in a binary tree in this reading order.

Example(s)
treeToArray(new BTNode("a")) - returns ['a']
treeToArray(new BTNode("a", new BTNode("b"))) - only left child, returns ['a', 'b']
treeToArray(new BTNode("a", null, new BTNode("b"))) - only right child, returns ['a', 'b']
treeToArray(new BTNode("a", new BTNode("b"), new BTNode("c"))) - basic tree with both left and right children, , returns ['a', 'b', 'c']

 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function treeToArray(root)
function tree_to_array(root):
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

class BTNode{
    constructor(value, left = null, right = null){
      this.value = value
      this.left = left
      this.right = right
    }
  }
  
  function treeToArray(root){
    if(!root) return []
    const array = []
    const q = [root]
    while(q.length > 0){
      const curr = q.shift()
  
      array.push(curr.value)
  
      if(curr.left) q.push(curr.left)
      if(curr.right) q.push(curr.right)
    }
    return array
  }
  
  console.log(treeToArray(null));
  console.log(treeToArray(new BTNode("a", new BTNode("b", new BTNode("c"), new BTNode("d")))));
  console.log(treeToArray(new BTNode("a", new BTNode("b", new BTNode("c", new BTNode("d"))))));
  
  const complete = new BTNode('a',
    new BTNode('b',
      new BTNode('d'),
      new BTNode('e')
    ),
    new BTNode('c',
      new BTNode('f'),
      new BTNode('g')
    )
  );
  console.log(treeToArray(complete));