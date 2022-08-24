class Node {
    constructor(value, left = null, right = null){
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  let root = new Node(1);
  root.left = new Node(5);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(6);
  root.left.left.left = new Node(5);
  
  //Preorder Traversal
  
  function preOrder(root){
    if(!root) return;
    console.log(root.value)
    preOrder(root.left)
    preOrder(root.right)
  }
  
  
  
  preOrder(root)
  
  
  // Inorder Traversal
  
  function inOrder(root){
    if(!root) return;
  
    inOrder(root.left);
    console.log(root.value);
    inOrder(root.right);
  }
  
  inOrder(root)
  
  // Postorder Traversal
  
  function postOrder(root){
    if(!root) return;
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.value)
  }
  
  postOrder(root)
  
  // tree height
  
  function getTreeHeight(root){
    if(!root) return -1;
  
    let left = getTreeHeight(root.left)
    let right = getTreeHeight(root.right)
  
    return 1 + Math.max(left,right)
  }
  console.log(getTreeHeight(root))
  
  
  function levelTraversal(root) {
    if(!root) return null;
    let q = [root];
    while(q.length > 0){
      let size = q.length;
      for(let i = 0; i < size; i++){
        const current = q.shift();
        console.log(current.value)
        if(current.left) q.push(current.left)
        if(current.right) q.push(current.right)
      }
    }
  }
  levelTraversal(root)

  // number of levels in a tree
  function numberOfLevels(root){
  if(!root) return 0
  let left = numberOfLevels(root.left)
  let right = numberOfLevels(root.right)
  return 1 + Math.max(left,right)
}

console.log(numberOfLevels(root))


// returns node at each level
function nodeAtLevel(root){
  let res = [];
  let q = [root];

  while(q.length > 0){
    let size = q.length;
    res.push([...q])
    for(let i = 0; i < size; i++){
      const current  = q.shift()
      if(current.left) q.push(current.left)
      if(current.right) q.push(current.right)
    }
  }
  return res
}

console.log(nodeAtLevel(root))

//sum of nodes at each level iterative

function sumOfNodesAtLevel(root){
  if(!root) return
  let res = [];
  let q = [root];

  while(q.length > 0){
    const size = q.length;
    let sum = 0;
    for(let i = 0; i < size; i++){
      const current = q.shift();
      sum += current.value;
      if(current.left) q.push(current.left)
      if(current.right) q.push(current.right)
    }
    res.push([sum])
  }
  return res;
}

console.log(sumOfNodesAtLevel(root))

// average of nodes at each level iterative

function averageOfNodesAtLevel(root){
  if(!root) return
  let res = [];
  let q = [root];

  while(q.length > 0){
    const size = q.length;
    let sum = 0;
    for(let i = 0; i < size; i++){
      const current = q.shift();
      sum += current.value;
      if(current.left) q.push(current.left)
      if(current.right) q.push(current.right)
    }
    res.push([sum/size])
  }
  return res;
}

console.log(averageOfNodesAtLevel(root))

//Maximum node at level

function maxOfNodesAtLevel(root){
  if(!root) return
  let res = [];
  let q = [root];

  while(q.length > 0){
    const size = q.length;
    let max = Number.NEGATIVE_INFINITY
    for(let i = 0; i < size; i++){
      const current = q.shift();
      max = Math.max(max, current.value)
      if(current.left) q.push(current.left)
      if(current.right) q.push(current.right)
    }
    res.push([max])
  }
  return res;
}

console.log(maxOfNodesAtLevel(root))

// Minimum node at level

function minOfNodesAtLevel(root){
  if(!root) return
  let res = [];
  let q = [root];

  while(q.length > 0){
    const size = q.length;
    let min = Number.POSITIVE_INFINITY
    for(let i = 0; i < size; i++){
      const current = q.shift();
      min = Math.min(min, current.value)
      if(current.left) q.push(current.left)
      if(current.right) q.push(current.right)
    }
    res.push([min])
  }
  return res;
}

console.log(minOfNodesAtLevel(root))

//First level a node appears

function firstLevelOfAppearance(root,target){
  let level = 0;
  let q = [root]
  while(q.length > 0){
    level++
    let size = q.length;
    for(let i = 0; i < size; i++){
      const current = q.shift();
      if(current.value === target) return level
      if(current.left) q.push(current.left)
      if(current.right) q.push(current.right)
    }
  }
  return 0
}

console.log(firstLevelOfAppearance(root,5))

// Last level a node appears

function lastLevelOfAppearance(root,target){
  let level = 0;
  let res = -1
  let q = [root]
  while(q.length >0){
    level++
    let size = q.length;
    for(let i = 0; i < size; i++){
      const current = q.shift();
      if(current.value === target) res = level
      if(current.left) q.push(current.left)
      if(current.right) q.push(current.right)
    }
  }
  return res
}

console.log(lastLevelOfAppearance(root,5))

// get all leaf nodes

function getLeafNodes(root){
  if(!root) return;
  if(!root.left && !root.right) return [root.value]
  let left = getLeafNodes(root.left)
  let right = getLeafNodes(root.right)

  if(left && right){
    return left  + right
  }else if(left){
    return left
  }else{
    return right
  }
}

console.log(getLeafNodes(root))

// get the size of a binary tree

function getSize(root){
  if(!root) return 0;
  return 1 + getSize(root.left) + getSize(root.right)
}

console.log(getSize(root))