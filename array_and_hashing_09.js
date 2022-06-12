// 128. Longest Consecutive Sequence
// Medium

// 9872

// 440

// Add to List

// Share
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

var longestConsecutive = function(nums) {
    let numberSet = new Set(nums)
    let max = 0;
    for(let i = 0; i < nums.length; i++){
        if(!numberSet.has(nums[i]-1)){
            let currentMax = 0;
            while(numberSet.has(nums[i] + currentMax)){
                currentMax++;
            }
            max = Math.max(currentMax, max)
        }
    }
    return max;
};