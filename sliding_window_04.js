// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

 

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

var checkInclusion = function(s1, s2) {
    const stringPerm = {};
    const currentString = {};
    let currentLength = 0;
    
    for(let i = 0; i < s1.length; i++){
        stringPerm[s1[i]] = (stringPerm[s1[i]]||0) + 1;
    }
    
    for(let i = 0; i < s2.length; i++){
        if(currentLength < s1.length){
            currentString[s2[i]] = (currentString[s2[i]]||0) + 1;
            currentLength++
        }
        console.log(currentString)
        
        if(currentLength === s1.length){
            let same = true;
            for(key in stringPerm){
                if(stringPerm[key] !== currentString[key]){
                    currentString[s2[i - s1.length + 1]]--
                    currentLength--
                    same = false;
                    break;
                }
            }
            if(same === true) return true
        }
        
    }
    return false;
};

var checkInclusion = function(s1, s2) {
    let stringPerm = {};
    let currentPerm = {};
    let currentLength = 0;
    let left = 0;
    
    for(let char of s1) stringPerm[char] = (stringPerm[char] || 0) + 1
    
    for(let i = 0; i < s2.length; i++){
        if(currentLength < s1.length){
            currentPerm[s2[i]] = (currentPerm[s2[i]] || 0) + 1
            currentLength++
        }
        
        if(currentLength === s1.length){
            let same = true
            for(let key in stringPerm){
                if(stringPerm[key]!== currentPerm[key]){
                    currentPerm[s2[left]]--
                    currentLength--
                    left++
                    same = false;
                    break;
                }
            }
            if(same === true) return true
        }
    }
    return false
};
// O(n)time complexity
// O(n) space complexity