
    /**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    //Insertion Sort
    for(let i = 1; i < nums.length; i++){
        let j = i;
        while(j > 0 && nums[j-1] > nums[j]){
            let temp = nums[j-1];
            nums[j-1] = nums[j];
            nums[j] = temp;
            j--
        }
    }
        return nums
    // Selection Sort
    for(let i = 0; i < nums.length -1; i++){
        let iMin = i;
        for(let j = i+1; j < nums.length; j++){
            if(nums[j] < nums[iMin]){
                iMin = j;
            }
        }
        if(iMin != i){
                let temp = nums[i];
                nums[i] = nums[iMin];
                nums[iMin] = temp;
        }
    }
    return nums;
    
    //Bubble Sort
    for(let i = 1; i < nums.length; i++){
        for(let j = 0; j < nums.length-1; j++){
            if(nums[j]> nums[j+1]){
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp
            }
        }
    }
    return nums;
};
