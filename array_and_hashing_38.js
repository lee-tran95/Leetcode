/*
'''
❓ PROMPT
Given an array of integers, return a sub-array of 'Left Peaks'. A Left Peak is defined as an element that is greater or equal in value to all elements to its right.

Example(s)
find_left_peaks([1, 2, 5, 3, 1, 2]) => [5, 3, 2]
find_left_peaks([3, 2, 1]) => [3, 2, 1]
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function find_left_peaks(arr) {
def find_left_peaks(arr: list[int]) -> list[int]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
function find_left_peaks(array){
    if(array.length === 0) return array
    let res = []
    for(const peak of array){
      let topStack = res[res.length-1]
      while(peak > topStack && res.length > 0){
        res.pop()
        topStack = res[res.length - 1]
      }
      res.push(peak)
    }
    return res
  }
  
  console.log(JSON.stringify(find_left_peaks([])))
  console.log(JSON.stringify(find_left_peaks([1, 2, 5, 3, 1, 2]))
    === "[5,3,2]")
  console.log(JSON.stringify(find_left_peaks([3, 2, 1]))
    === "[3,2,1]")
  console.log(JSON.stringify(find_left_peaks([1, 2, 3]))
    === "[3]")
  console.log(JSON.stringify(find_left_peaks([10, 4, 6, 3, 5]))
    === "[10,6,5]")
  console.log(JSON.stringify(find_left_peaks([1,2,3,5,5,5,4,5,3,2,1]))
    === "[5,5,5,5,3,2,1]")
  console.log(JSON.stringify(find_left_peaks([1,2,3,5,5,5,4,6,5,3,2,1]))
    === "[6,5,3,2,1]")
  console.log(JSON.stringify(find_left_peaks([5,5,5,5,5]))
    === "[5,5,5,5,5]")