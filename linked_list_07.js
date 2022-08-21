// 287. Find the Duplicate Number
// Medium

// 14713

// 1821

// Add to List

// Share
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

 

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3

var findDuplicate = function(nums) {
    let slow = 0;
    let fast = 0;
    while(true){
        slow = nums[slow];
        fast = nums[nums[fast]];
        if(slow === fast) break;
    }
    
    let slow2 = 0
    while(true){
        slow = nums[slow]
        slow2 = nums[slow2]
        if(slow === slow2) break;
    }
    
    return slow
};

var findDuplicate = function(nums) {
    let slow = 0;
    let fast = 0;
    
    while(true){
        slow = nums[slow]
        fast = nums[nums[fast]]
        if(nums[slow] === nums[fast]){
            break
        }
    }

    let slow2 = 0;
    while(true){
        slow = nums[slow]
        slow2 = nums[slow2]
        if(slow === slow2){
            return slow
        }
    }
};

// O(n) time complexity
// O(1) space complexity
