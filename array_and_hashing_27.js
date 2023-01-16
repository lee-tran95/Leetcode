// // Given an array of integers, return a sub-array of 'Left Peaks'. A Left Peak is defined as an element that is greater or equal in value to all elements to its right.
// Example(s)
// find_left_peaks([1, 2, 5, 3, 1, 2]) => [5, 3, 2]
// find_left_peaks([3, 2, 1]) => [3, 2, 1]

function find_left_peaks(arr){
    let peaks = [];
    for(let num of arr){
      while(peaks.length && peaks[peaks.length-1] < num){
        peaks.pop()
      }
      peaks.push(num)
    }
    return peaks
  }
  
  console.log(find_left_peaks([]))
  console.log(find_left_peaks([1,2,3,4,5]))
  console.log(find_left_peaks([5,4,3,2,1,]))
  console.log(find_left_peaks([1,2,5,3,1,2]))