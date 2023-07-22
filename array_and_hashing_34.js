// Given an array nums with n objects colored red, white, or blue, 
// sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

var sortColors = function(nums) {
    let left = 0;
    let right = nums.length -1;
    for(let i = 0; i <= right;i++){
        if(nums[i] === 0){
            [nums[i],nums[left]] = [nums[left],nums[i]]
            left++
        }else if (nums[i] === 2){
            [nums[i],nums[right]]=[nums[right],nums[i]]
            right--
            i--
        }
    }
    return nums
};