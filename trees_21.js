/*
'''
❓ PROMPT
Flipping a tree means rotating it 180 degrees around its vertical axis. For example:
     1
   /   \
  2     3
 / \   / \
4  5  6   7

Becomes:
     1
   /   \
  3     2
 / \   / \
7  6  5   4

Example(s)
    5 <--- root
 10   5
flip(root)

root.val == 5
root.left.val == 5
root.right.val == 10

Verify that these are leaf nodes:
root.left.left == None
root.left.right == None
root.right.left == None
root.right.right == None
 

'''
*/

    class Node{
        constructor(val, left = null, right = null){
        this.val = val
        this.left = left
        this.right = right
        }
    }

  function flip(root){
    if(!root) return null
    const q = [root]
    while(q.length > 0){
      const curr = q.shift()
      let temp = curr.left
      curr.left = curr.right
      curr.right = temp
      if(curr.left) q.push(curr.left)
      if(curr.right) q.push(curr.right)
    }
    return root
  }
  
  let root = new Node(5)
  flip(root)
  console.log(root.val === 5)
  
  //    5
  // 10   5
  root = new Node(5,
    new Node(10),
    new Node(5))
  flip(root)
  console.log(
    root.val === 5,
    root.left.val === 5,
    root.right.val === 10,
    root.left.left === null, // verify leaf node
    root.left.right === null, // verify leaf node
    root.right.left === null, // verify leaf node
    root.right.right === null // verify leaf node
  )
  
  //    6
  //  6   6
  // 6 6
  root = new Node(6,
    new Node(6,
      new Node(6),
      new Node(6)),
    new Node(6))
  flip(root)
  console.log(
    root.val === 6,
    root.left.val === 6,
    root.right.val === 6,
    root.left.left === null, // verify leaf node
    root.left.right === null, // verify leaf node
    root.right.left.val === 6,
    root.right.right.val === 6,
    root.right.left.left === null, // verify leaf node
    root.right.left.right === null, // verify leaf node
    root.right.right.left === null, // verify leaf node
    root.right.right.right === null // verify leaf node
  )
  
  //     5
  //  10   1
  // 1  7
  root = new Node(5,
    new Node(10,
      new Node(1),
      new Node(7)),
    new Node(1))
  flip(root)
  console.log(
    root.val === 5,
    root.left.val === 1,
    root.left.left === null, // verify leaf node
    root.left.right === null, // verify leaf node
    root.right.val === 10,
    root.right.left.val === 7,
    root.right.right.val === 1,
    root.right.left.left === null, // verify leaf node
    root.right.left.right === null, // verify leaf node
    root.right.right.left === null, // verify leaf node
    root.right.right.right === null // verify leaf node
  )
  
  //      5
  //   2    1
  // 3   7   10
  //          10
  root = new Node(5,
    new Node(2,
      new Node(3),
      new Node(7)),
    new Node(1,
      null,
      new Node(10,
        null,
        new Node(10))))
  flip(root)
  console.log(
    root.val === 5,
    root.left.val === 1,
    root.left.left.val === 10,
    root.left.right === null, // verify leaf node
    root.left.left.left.val === 10,
    root.left.left.right === null, // verify leaf node
    root.left.left.left.left === null, // verify leaf node
    root.left.left.left.right === null, // verify leaf node
    root.right.val === 2,
    root.right.left.val === 7,
    root.right.right.val === 3,
    root.right.left.left === null, // verify leaf node
    root.right.left.right === null, // verify leaf node
    root.right.right.left === null, // verify leaf node
    root.right.right.right === null // verify leaf node
  )
  
  //       1
  //      2
  //     3
  //    4
  //   5
  //  6
  // 3
  root = new Node(1,
    new Node(2,
      new Node(3,
        new Node(4,
          new Node(5,
            new Node(6,
              new Node(3)))))))
  flip(root)
  console.log(
    root.val === 1,
    root.left === null, // verify leaf node
    root.right.val == 2,
    root.right.left == null, // verify leaf node
    root.right.right.val == 3,
    root.right.right.left == null, // verify leaf node
    root.right.right.right.val == 4,
    root.right.right.right.left == null, // verify leaf node
    root.right.right.right.right.val == 5,
    root.right.right.right.right.left == null, // verify leaf node
    root.right.right.right.right.right.val == 6,
    root.right.right.right.right.right.left == null, // verify leaf node
    root.right.right.right.right.right.right.val == 3,
    root.right.right.right.right.right.right.left == null, // verify leaf node
    root.right.right.right.right.right.right.right == null // verify leaf node
  )