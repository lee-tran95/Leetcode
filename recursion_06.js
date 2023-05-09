/*
'''
❓ PROMPT
Given a string and a non-empty substring *sub*, compute recursively if at least n copies of sub appear in the string somewhere, possibly with overlapping. N will be non-negative.

Example(s)
strCopies("catcowcat", "cat", 2) == True
strCopies("catcowcat", "cow", 2) == False
strCopies("catcowcat", "cow", 1) == True
 
'''
*/
function strCopies(word,sub, n){
    if (n === 0) return true
    if (word.length < sub.length) return false
  
    if(word.substring(0,sub.length) === sub){
      return strCopies(word.substring(1), sub, n-1)
    }else{
      return strCopies(word.substring(1), sub, n)
    }
  }
  
  console.log(strCopies("catcowcat", "cat", 2) === true)
  console.log(strCopies("catcowcat", "cow", 2) === false)
  console.log(strCopies("catcowcat", "cow", 1) === true)
  console.log(strCopies("iiijjj", "i", 3) === true)
  console.log(strCopies("iiijjj", "i", 4) === false)
  console.log(strCopies("iiijjj", "ii", 2) === true)
  console.log(strCopies("iiijjj", "ii", 3) === false)
  console.log(strCopies("iiijjj", "x", 3) === false)
  console.log(strCopies("iiijjj", "x", 0) === true)
  console.log(strCopies("iiiiij", "iii", 3) === true)
  console.log(strCopies("iiiiij", "iii", 4) === false)
  console.log(strCopies("ijiiiiij", "iiii", 2) === true)
  console.log(strCopies("ijiiiiij", "iiii", 3) === false)
  console.log(strCopies("dogcatdogcat", "dog", 2) === true)