// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []

var threeSum = function(nums) {
    let sortedNums = nums.sort((a,b) => a - b);
    let res = [];
    if(nums.length < 3) return res;
    
    for(let i = 0; i < nums.length; i++){
        if(sortedNums[i] > 0) return res;
        if(i > 0){
            if(sortedNums[i] === sortedNums[i - 1]) continue;
        }

        let a = i;
        let left = i + 1;
        let right = nums.length -1;

        while(left < right){
            let sum = sortedNums[a] + sortedNums[left] + sortedNums[right];
            if(sum === 0){
                res.push([sortedNums[a],sortedNums[left],sortedNums[right]])
                left++
                while(sortedNums[left] === sortedNums[left -1] && left < right){
                    left++
                }
               
            }else if(sum > 0){
                right--
            }else if(sum < 0){
                left++
            }
        }
        
    }
    return res;
};

var threeSum = function(nums) {
    let sortedNums = nums.sort((a,b) => a-b)
    let res = [];
    if(nums.length < 3) return res;
    
    for(let i = 0; i < sortedNums.length; i++){
        if(sortedNums[i] > 0) return res;
        if(i > 0){
             if(sortedNums[i] === sortedNums[i-1]) continue;
        }
        let a = i;
        let left = i+1;
        let right = sortedNums.length -1;
        
        while(left < right){
            let sum = sortedNums[a] + sortedNums[left] + sortedNums[right]
            if(sum === 0){
                res.push([sortedNums[a],sortedNums[left],sortedNums[right]])
                left++
                while(left < right && sortedNums[left] === sortedNums[left-1]){
                    left++
                }
            }else if (sum > 0){
                right--
            }else if (sum < 0){
                left++
            }
        }
    }
    return res
};

// O(n^2) time complexity
// O(n) space complexity