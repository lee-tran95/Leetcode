// 42. Trapping Rain Water
// Hard

// 20048

// 283

// Add to List

// Share
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

// Example 1:


// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

var trap = function(height) {
    let left = 0;
    let right = height.length -1;
    let maxLeft = height[left];
    let maxRight = height[right]
    let res = 0;
    
    while(left < right){
        if(maxLeft <= maxRight){
            left++
            maxLeft = Math.max(maxLeft,height[left])
            res += maxLeft - height[left]
        }else{
            right--
            maxRight = Math.max(maxRight,height[right])
            res += maxRight - height[right]
        }
    }
    return res
};

var trap = function(height) {
    let left = 0;
    let right = height.length-1
    let leftMax = height[left]
    let rightMax = height[right]
    let res = 0;
    
    while(left < right){
        if(leftMax <= rightMax){
            left++
            leftMax = Math.max(leftMax,height[left])
            res += leftMax - height[left]
        }else{
            right--
            rightMax = Math.max(rightMax,height[right])
            res += rightMax - height[right]
        }
    }
    return res
};

//O(n) time complexity
//O(1) space complexity