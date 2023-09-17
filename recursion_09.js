/*
'''
Print all K-length increasing sequences

Given two positive integers *seqLen* and *upperBound*, print all increasing sequences of length *seqLen* such that the elements in every sequence are from the first *upperBound* natural numbers. 

You can assume *seqLen* will be positive and <= *upperBound*. You may want to write a helper method to recurse easier.
 

EXAMPLE(S)
printSeq(seqLen=2, upperBound=3)
[1, 2]
[1, 3]
[2, 3]

printSeq(seqLen=3, upperBound=4)
[1, 2, 3]
[1, 2, 4]
[1, 3, 4]
[2, 3, 4]

printSeq(seqLen=1, upperBound=5)
[1]
[2]
[3]
[4]
[5]


helper(num, array){

Base Case:
when array = seqLen then console log array
when num = upperbound push into array and then if new array length = seqLen console log otherwise return

recursive case:

for loop starting at num
push curr num into array
helper(num + 1, array)
pop from array

return
}
helper(1, [])


*/

function printSeq(seqLen, upperBound){

    function helper(num, array){
      if (array.length === seqLen) {
        console.log(array)
        return 
      }
  
      for (let i = num; i <= upperBound; i++){
          array.push(i)
          helper(i + 1, array)
          array.pop()
      }
      return 
    }
  
    return helper(1, [])
  }
  
  printSeq(2, 3); console.log("====")
  // [1, 2]
  // [1, 3]
  // [2, 3]
  
  printSeq(3, 4); console.log("====")
  // [1, 2, 3]
  // [1, 2, 4]
  // [1, 3, 4]
  // [2, 3, 4]
  
  printSeq(3, 5); console.log("====")
  // [1, 2, 3]
  // [1, 2, 4]
  // [1, 2, 5]
  // [1, 3, 4]
  // [1, 3, 5]
  // [1, 4, 5]
  // [2, 3, 4]
  // [2, 3, 5]
  // [2, 4, 5]
  // [3, 4, 5]
  
  printSeq(5, 5); console.log("====")
  // [1, 2, 3, 4, 5]
  
  printSeq(1, 5); console.log("====")
  // [1]
  // [2]
  // [3]
  // [4]
  // [5]