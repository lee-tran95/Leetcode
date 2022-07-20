// Write a function that takes in a bst and a target value and returns the value in the bst that is closest to the target

function findClosestValueInBst(tree, target) {
    // Write your code here.
    if(!tree) return
    let closest = tree.value;
    let stack = [tree];
    while(stack.length > 0){
      const current = stack.pop();
      if(target === current.value) return current.value
      if(target < current.value){
        if(Math.abs(target - current.value) < Math.abs(target - closest)) closest = current.value
        if(current.left){
          stack.push(current.left)
        }
      }else if(target > current.value){
        if(Math.abs(target - current.value) < Math.abs(target - closest)) closest = current.value
        if(current.right){
          stack.push(current.right)
        }
      }
    }
    return closest
  }
  
  // This is the class of the input tree. Do not edit.
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }