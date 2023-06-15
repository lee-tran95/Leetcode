// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. 
//Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

var numJewelsInStones = function(jewels, stones) {
    const jewelId = new Set();
    for(let jewel of jewels){
        if(jewelId.has(jewel)){
            continue
        }else{
            jewelId.add(jewel)
        }
    }

    let res = 0;
    for(let stone of stones){
        if(jewelId.has(stone))res++
    }
    return res
};

//O(N) time
//O(N) space