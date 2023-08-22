/*
'''
Next Greater Element

Given a list of positive and distinct integers, find the next greater element for each element. The next greater element (NGE) of an element is the next element which is greater than the current element's value. Formally, the NGE of element A[i] is A[j] where A[j] > A[i], j > i, and j is the lowest possible index that meets this criterion.

For example in the array [1, 3, 2, 5, 4, 8], the NGE of 3 is 5 since 5 is greater than 3 and the index of element 5 is the lowest among all elements to the right of 3 which satisfies the 'greater than' relation.
 

EXAMPLE(S)
next_greater_element([2, 7, 3, 5, 4, 6, 8]) == [7, 8, 5, 6, 6, 8, -1]
next_greater_element([5, 4, 3, 2, 1]) == [-1, -1, -1, -1, -1]
[] => []
[1] => [-1]
 
[1]
[7, ,5]
result[0] = 7
result[2] = 5
FUNCTION SIGNATURE
def findNextGreaterElements(input: List[int]) -> List[int]
'''
*/

function nextGreaterElement(arr){
    let result = Array(arr.length).fill(-1);
    let stack = [];
  
    for(let i = 0; i < arr.length; i++){
      // console.log('i ', i, 'stack ', stack)
      while(stack.length > 0 && arr[stack[stack.length-1]] <  arr[i]){
        result[stack[stack.length -1]] = arr[i];
        stack.pop()
      }
      // console.log('i ', i, 'result ', result)
      stack.push(i);
    }
  
    return result;
  }
  
  console.log(nextGreaterElement([2, 7, 3, 5, 4, 6, 8]))
  
  console.log(nextGreaterElement([5, 4, 3, 2, 1]))
  console.log(nextGreaterElement([]))
  console.log(nextGreaterElement([1,2,3,4,5]))
  