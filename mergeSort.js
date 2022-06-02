function mergeSort(nums){
    if(nums.length === 1){
        return nums;
    }

    let mid = Math.floor(nums.length/2);

    let arrayLeft = mergeSort(nums.slice(0,mid));
    let arrayRight = mergeSort(nums.slice(mid));
    return merge(arrayLeft,arrayRight)
};


function merge(arrayLeft,arrayRight){
let arrayMerged = [];
let leftIndex = 0;
let rightIndex = 0;

while(leftIndex < arrayLeft.length && rightIndex < arrayRight.length){
    if(arrayLeft[leftIndex] <= arrayRight[rightIndex]){
        arrayMerged.push(arrayLeft[leftIndex])
        leftIndex++
    }else{
        arrayMerged.push(arrayRight[rightIndex])
        rightIndex++
    }
}

if(leftIndex < arrayLeft.length){
    while(leftIndex < arrayLeft.length){
        arrayMerged.push(arrayLeft[leftIndex])
        leftIndex++
    }
}else{
    while(rightIndex < arrayRight.length){
        arrayMerged.push(arrayRight[rightIndex])
        rightIndex++
    }
}
return arrayMerged;
}


console.log(mergeSort([1,9,5,3,2,1,3,4,5]))