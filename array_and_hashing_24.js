// Given an unsorted array, return the number of duplicate elements.

// Examples:
// Input1: []
// Output1: 0
// Input2: [3, 1, 1, 2, 3, 1, 1, 1, 4]
// Output2: 2 // [1, 3]
// [execution time limit] 4 seconds (js)

// [input] array.integer array

// [output] integer

// the number of duplicate elements

function solution(array) {
    let dupe = new Set()
    let counted = new Set()
    let count = 0;
    for(let num of array){
        if(dupe.has(num) && !counted.has(num)){
            counted.add(num)
            count++
        }else(
            dupe.add(num)
        )
    }
    return count
}