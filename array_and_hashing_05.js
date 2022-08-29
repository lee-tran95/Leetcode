// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

var topKFrequent = function(nums, k) {
    let count = {};
    let freq = {};

    // count number of occurrences in nums
    for(let i = 0; i < nums.length; i++){
        if(count[nums[i]]){
            count[nums[i]] = count[nums[i]] + 1
        }else{
            count[nums[i]] = 1
        }
    }
    
    // flips the count map so that the frequency of occurences is the key and the value is the number that occurs at that frequency
    for(let key in count){
        freq[count[key]] ? freq[count[key]].push(key) : freq[count[key]] = [key] 
    }
    
    let res = [];
    for(let key in freq){
        let items = freq[key];
        for(let i = 0; i < items.length; i++){
            res.push(items[i])
        }
    }
    console.log(res)
    return res.splice(res.length - k)
    
};

var topKFrequent = function(nums, k) {
    let count = {};
    for(let num of nums){
        count[num] = (count[num] || 0) + 1
    }
    let sorted = Object.keys(count).sort((a,b) => count[b] - count[a])
    return sorted.slice(0,k)
    
};
// O(nlogn) time
// O(n) space