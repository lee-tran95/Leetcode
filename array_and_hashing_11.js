// Given a string s that contains parentheses and letters, remove the minimum number of invalid parentheses to make the input string valid.

// Return all the possible results. You may return the answer in any order.

 

// Example 1:

// Input: s = "()())()"
// Output: ["(())()","()()()"]
// Example 2:

// Input: s = "(a)())()"
// Output: ["(a())()","(a)()()"]
// Example 3:

// Input: s = ")("
// Output: [""]
var removeInvalidParentheses = function(s) {
    let q = new Set([s])
    while(q.size){
        const next = new Set()
        for(let value of q){
            if(isValid(value)){
                return [...q].filter(isValid)
            }
            for(let i = 0; i < value.length; i++){
                next.add(value.slice(0,i) + value.slice(i+1))
            }
        }
        q = next;
    }
    return [] 
};
function isValid(str){
        let bal = 0;
        for(let char of str){
            if(char === '('){
                bal++
            }else if(char === ')'){
                bal--
            }
            if(bal < 0) return false
        }
        return bal === 0
    }