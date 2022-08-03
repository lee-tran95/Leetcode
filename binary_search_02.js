// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
 

// Example 1:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

var searchMatrix = function(matrix, target) {
    //search columns first for the array that might contain the number
    if (matrix.length == 0 || matrix[0].length == 0) return false;
    let left = 0;
    let right = matrix.length-1;
    let mid = Math.floor(left + (right-left)/2)

    while(left <= right){
        if(target > matrix[mid][0]){
            left = mid + 1
            mid = left + Math.floor((right-left)/2)
        }else if(target < matrix[mid][0]){
            right = mid -1
           mid = left + Math.floor((right-left)/2)
        }else if(target === matrix[mid][0]){
            return true
        }
    }

    // use the right pointer in case left and right crossover since that means the target
    // is between the start of left array nad start of right array before cross over.
    //then standard binary search
    let arr = right < 0? 0:right;
    left = 0;
    right = matrix[arr].length -1;
    mid = Math.floor(left + (right-left)/2)

    while(left <= right){
        if(target > matrix[arr][mid]){
            left = mid + 1
            mid = left + Math.floor((right-left)/2)
        }else if(target < matrix[arr][mid]){
            right = mid -1
            mid = left + Math.floor((right-left)/2)
        }else if(target === matrix[arr][mid]){
            return true
        }
    }
    return false
};

//O(log(n) + log(m)) = O(logmn)
//O(1) space complexity