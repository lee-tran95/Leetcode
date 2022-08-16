class Node {
    constructor(value, left = null, right = null){
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(6);
  root.left.left.left = new Node(5);
  
  //Preorder Traversal
  
  // function preOrder(root){
  //   if(!root) return;
  //   console.log(root.value)
  //   preOrder(root.left)
  //   preOrder(root.right)
  // }
  
  
  
  // preOrder(root)
  
  
  //Inorder Traversal
  
  // function inOrder(root){
  //   if(!root) return;
  
  //   inOrder(root.left);
  //   console.log(root.value);
  //   inOrder(root.right);
  // }
  
  // inOrder(root)
  
  //Postorder Traversal
  
  // function postOrder(root){
  //   if(!root) return;
  //   postOrder(root.left);
  //   postOrder(root.right);
  //   console.log(root.value)
  // }
  
  // postOrder(root)
  
  //tree height
  
  // function getTreeHeight(root){
  //   if(!root) return -1;
  
  //   let left = getTreeHeight(root.left)
  //   let right = getTreeHeight(root.right)
  
  //   return 1 + Math.max(left,right)
  // }
  
  // console.log(getTreeHeight(root))
  
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