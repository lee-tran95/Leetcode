// Given an array, reverse every sub-array formed by consecutive k elements.

// Example(s)
// Input: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9], k = 3
// Output: [3, 2, 1, 6, 5, 4, 9, 8, 7]

// Input: arr = [1, 2, 3, 4, 5, 6, 7, 8], k = 5
// Output: [5, 4, 3, 2, 1, 8, 7, 6]

// Input: arr = [1, 2, 3, 4, 5, 6], k = 1
// Output: [1, 2, 3, 4, 5, 6]

// Input: arr = [1, 2, 3, 4, 5, 6, 7, 8], k = 10
// Output: [8, 7, 6, 5, 4, 3, 2, 1] 

function reverse(arr,k){
    let left = 0; 
    let right = 0;
    if(!arr) return
  
    function reverseArray(start,end){
      while(start < end){
        [arr[start], arr[end]] = [arr[end],arr[start]]
        start++
        end--
      }
    }
  
    while(right < arr.length){
      if(right === arr.length -1){
        reverseArray(left,right)
        right++
      }else if(right - left === k-1){
        reverseArray(left,right)
        console.log(arr)
        right++
        left = right
      }else{
        right++
      }
    }
    return arr
  }