// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

var isValid = function(s) {
    if(s.length%2 !== 0) return false
    let leftParenthesis = {
        '{':'}',
        '(':')',
        '[':']'
    }
    
    let stack = [];
    for(let i = 0; i < s.length; i++){
        if(leftParenthesis.hasOwnProperty(s[i])){
            stack.push(s[i])
        }else{
            let left = stack.pop()
            if(leftParenthesis[left] !== s[i]){
                return false
            }
        }
    }
    return stack.length === 0 ? true : false;
};