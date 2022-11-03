// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.


// recursive relation, either rob current house and skip previous house and get all loot before
// or skip current house and get loot from previous house and all loot before
var rob = function(nums) {

    function dp(nums, i){
        if(i < 0) return 0;
        return Math.max(dp(nums, i-2) + nums[i], dp(nums,i-1))
    }
    return dp(nums, nums.length -1)
};

// top down memo approach
var rob = function(nums) {
    memo = new Array(nums.length + 1).fill(-1)


   function dp(nums, i){
       if(i < 0) return 0;
       if(memo[i] >= 0) return memo[i]
       let result = Math.max(dp(nums, i-2) + nums[i], dp(nums,i-1))
       memo[i] = result;
       return result
   }
   return dp(nums, nums.length -1)
};

// bottom up approach
var rob = function(nums) {
    if(nums.length === 0) return 0
    memo = new Array(nums.length + 1).fill(-1)
    memo[0] = 0;
    memo[1] = nums[0]
    for(let i = 1; i < nums.length; i++){
        let val = nums[i];
        memo[i+1] = Math.max(memo[i], memo[i-1] + val)
    }
    return memo[nums.length]
};

//bottom up approach 2 variable approach since we only need memo[i] and memo[i-1] which
// is only 2 variable to keep track of
var rob = function(nums) {
    if(nums.length === 0) return 0
    let prev1 = 0;
    let prev2 = 0;
    for(let num of nums){
        let temp = prev1;
        prev1 = Math.max(prev2 + num, prev1)
        prev2 = temp
    }
    return prev1
};