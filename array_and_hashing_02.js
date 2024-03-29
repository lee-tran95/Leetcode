// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


 var containsDuplicate = function(nums) {
    let hash = new Map();
    for(let i = 0; i < nums.length; i++){
        if(hash.has(nums[i])){
            return true
        }
        hash.set(nums[i],true)
    }
    return false
};

var containsDuplicate = function(nums) {
    const map = {};
    for(let num of nums){
        map[num] = (map[num] || 0) + 1
        if(map[num] >= 2) return true
    }
    return false
};