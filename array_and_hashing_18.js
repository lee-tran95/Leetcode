// Convert a string into a binary tree
// example: '4(2(3)(1))(6(5))')

class TreeNode{
    constructor(val, left = null, right =null){
      this.val = val;
      this.left = left;
      this.right = right
    }
  }
  
  function strTwoTree(string){
    function helper(substring){
      if(!substring || substring.length === 0){
        return null
      }
      let leftParen = substring.indexOf('(')
      let rightParen = 0;
      if(leftParen === -1) return Number(substring)
      let root = new TreeNode(Number(substring.slice(0,leftParen)))
      let count = 0
  
      for(let i = leftParen; i < substring.length; i++){
        if(substring[i] === '('){
          count += 1
        }else if(substring[i] === ')'){
          count -= 1
        }
        if(count === 0){
          rightParen = i
          break
        }
      }
      root.left = helper(substring.slice(leftParen+1, rightParen))
      root.right = helper(substring.slice(rightParen + 2, substring.length -1))
      return root
    }
    return helper(string)
  }