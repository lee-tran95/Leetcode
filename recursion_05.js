// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

var letterCombinations = function(digits) {
    if(digits.length === 0) return []
    const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let combinations = [];
  let res = []
  function recurse(currRes, index){
      if(currRes.length === digits.length){
      combinations.push(currRes.join('')) 
      return;
      };   
        for(let letter of map[digits[index]]){
            currRes.push(letter)
            recurse(currRes, index+1)
            currRes.pop()
        }
      }
  recurse(res,0)
  return combinations;
};