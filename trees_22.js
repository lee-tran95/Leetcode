/*
'''
You are given a binary tree that is represented by a string. Nodes have no value. A 0 represents null and a (00) represents a node with no children, a leaf node. ((00)0) would represent a tree where the root has one left node and no right node. ((00)(00)) represents a tree with one left and one right node.

Given this representation of the tree, return the maximum depth of the tree.


(00) = depth 0

EXAMPLE(S)
(((00)0)0) represents this tree with a max depth of 2
    0
   /
  0
 /
0

((0(0(00)))(00)) represents this tree with a max depth of 3
    0
   /  \
  0    0
   \
    0
      \
       0

      

new Node(new Node(new Node()), new Node())

Method 1 Stack : Iterate through the string, keep track of the parens (keep a max), use a stack, subtract 1 from max to get depth

Method 2 Counters : 
Current Depth and Max Depth ? 
Iterate through the string, 
if we reach "(" add to the current depth, 
if current depth exceeds the max depth we replace max depth, 
otherwise if we reach ")" subtract 1, 
then return the max depth - 1 

(00) = depth 0

((0(0(00)))(00)) = depth 3
1
1 + 1 = 2
1 + 1 + 1 = 3
1 = 4
-1 = 3
-1 = 2
-1 = 1
1 = 2
-1 = 1
-1 = 0



FUNCTION SIGNATURE
def maxDepth(tree: str) -> int:
'''

Follow up (time-permitting): What if the tree might be invalid. If the tree is invalid, return -1, otherwise return the depth as before. The tree might be invalid by mismatched parentheses or missing children. Every node must have two children or null values.


*/

function maxDepth(str){
    let currDepth = 0;
    let maxDepth = 0;
    if(!str) return -1
  
    for(let i = 0; i < str.length; i++){
      if(str[i] === "("){
        currDepth++
        maxDepth = Math.max(currDepth,maxDepth)
      }else if (str[i] === ")"){
        if(str[i-1] === "(") return -1
        if(currDepth === 0){
          return -1
        }
        
        currDepth--
        
      }
    }
    return  currDepth === 0 ? maxDepth - 1 : -1
  }
  
  //if currDepth !=== 0 invalid parentheses
  //
  
  
  let test1 = "(((00)0)0)"
  console.log("Test 1: ", maxDepth(test1));//2
  
  let test2 = "((0(0(00)))(00))"
  console.log("Test 2: ", maxDepth(test2));//3
  
  let test3 = "(00)";
  console.log("Test 3: ", maxDepth(test3));//0
  
  let test4 = "(0((00)"
  console.log("Test 4: ", maxDepth(test4))//-1
  
  let test5 = "((00)((())))";
  console.log("Test 5: ", maxDepth(test5))//-1
  
  let test6 = "(00)(00)"
  console.log("Test 6: ", maxDepth(test6))//-1