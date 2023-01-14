class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
  }
  
  function findTreeHeight(root) {
    if(!root) return -1
    if(!root) return -1;
    let left = findTreeHeight(root.left)
    let right = findTreeHeight(root.right)
  
    return 1 + Math.max(left,right)
  }
  
  // Test Cases
  console.log(findTreeHeight(null), -1)
  console.log(findTreeHeight(new TreeNode(1, new TreeNode(2), new TreeNode(3))), 1)
  console.log(findTreeHeight(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))), 3)