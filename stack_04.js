// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 //

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

var generateParenthesis = function(n) {
    
    let stack = [];
    let res = [];
    let openCount = 0;
    let closedCount = 0;
    
    function recursive(openCount,closedCount){
        if(openCount === n && closedCount === n){
            res.push(stack.join(''))
            return;
        }
        if(openCount < n){
            stack.push('(')
            recursive(openCount+1,closedCount)
            stack.pop()
        }
        if(closedCount < openCount){
            stack.push(')')
            recursive(openCount,closedCount+1)
            stack.pop()
        }
    }
    
    recursive(openCount,closedCount)
    return res
};

var generateParenthesis = function(n) {
    
    let res = [];
    let openCount = 0;
    let closedCount = 0;
    let path = '';
    
    function recursive(openCount,closedCount,path){
        if(openCount === n && closedCount === n){
            res.push(path)
            return 
        }
        if(openCount < n){
            recursive(openCount+1,closedCount,path+'(')
        }
        if(closedCount < openCount){
            recursive(openCount,closedCount+1,path+')')
        }
    }
    
    recursive(openCount,closedCount,path)
    return res
};

var generateParenthesis = function(n) {
    let res = []
    let stack = []
    let openCount = 0
    let closedCount = 0
    
    function recursive (openCount, closedCount){
        if(openCount === n && closedCount === n){
            res.push(stack.join(''))
            return
        }
        if(openCount < n){
            stack.push('(')
            recursive(openCount+1,closedCount)
            stack.pop()
        }
        if(closedCount < openCount){
            stack.push(')')
            recursive(openCount,closedCount+1)
            stack.pop()
        }
    }
     recursive(openCount,closedCount)
     return res
 };

 //2^n time complexity
 