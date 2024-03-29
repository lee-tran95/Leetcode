// Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.

// A subarray is a contiguous part of the array.

 

// Example 1:

// Input: nums = [1,0,1,0,1], goal = 2
// Output: 4
// Explanation: The 4 subarrays are bolded and underlined below:
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// Example 2:

// Input: nums = [0,0,0,0,0], goal = 0
// Output: 15

var numSubarraysWithSum = function(nums, goal) {
    let res = 0;
    let count = new Array(nums.length+1).fill(0)
    let sum = 0;
    count[0] = 1
    
    for(num of nums){
        sum += num
        if(sum - goal >= 0){
            res += count[sum - goal]
        }
        count[sum]++
    }
    return res
    };