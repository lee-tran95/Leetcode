// Given an integer array nums and an integer k, 
// return true if there are two distinct indices i and j 
// in the array such that nums[i] == nums[j] and abs(i - j) <= k.

var containsNearbyDuplicate = function(nums, k) {
    let idxMap = new Map()
    for(let i = 0; i < nums.length; i++){
        let currentIdx = idxMap.get(nums[i])
        if(currentIdx >= 0 && Math.abs(currentIdx - i) <= k) return true
        idxMap.set(nums[i], i)
    }
    return false
};

//O(n) time
//O(n) space