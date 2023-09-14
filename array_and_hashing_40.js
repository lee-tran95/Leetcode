// Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.

// Implement the Solution class:

// Solution(int[] nums) Initializes the object with the integer array nums.
// int[] reset() Resets the array to its original configuration and returns it.
// int[] shuffle() Returns a random shuffling of the array.


var Solution = function(nums) {
    this.array = nums
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return [...this.array]
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let array = [...this.array]
    for(let i = array.length -1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
};