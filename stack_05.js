// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.


// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]

var dailyTemperatures = function(temperatures) {
    if(temperatures.length === 0) return []
    const stack = [];
    stack.push(0)
    const res = [];
    for(let i = 1; i < temperatures.length; i++){
      let topStack = stack[stack.length-1]
      while(temperatures[i] > temperatures[topStack] && stack.length > 0){
        res[topStack] = i - topStack
        stack.pop()
        topStack = stack[stack.length-1]
      }
      stack.push(i)
    }
    while(stack.length > 0){
      const currIndex = stack.pop()
      res[currIndex] = 0;
    }
    return res;
  };

  var dailyTemperatures = function(temperatures) {
    let answer = [];
    let stack = [0];
    for(let i = 1; i < temperatures.length; i++){
        let current = temperatures[i]
        while(current > temperatures[stack[stack.length-1]] && stack.length > 0){
            let day = stack.pop()
            answer[day] = i - day
        }
        stack.push(i)
    }
    for(let i = 0; i < stack.length; i++){
        answer[stack[i]] = 0;
    }
    return answer
};

// O(n) time complexity
// O(n) space complexity