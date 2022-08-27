// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    let hash = {};
    for(let i = 0; i < s.length; i++){
        if(s[i] in hash){
            hash[s[i]]++
        }else{
            hash[s[i]] = 2 // set to 2 because decrementing to 0 leads to falsy in 2nd for loop
        }
    }
    for(let i = 0; i < t.length; i++){
        hash[t[i]]--
        if(hash[t[i]] < 1 || !hash[t[i]]) return false;
    }
    return true
};

var isAnagram = function(s, t) {
    if(s.length != t.length) return false
    let map = {};
    for(let c of s){
        map[c] = (map[c] || 0) + 1
    }
    for(let c of t){
        if(!map[c]) return false
        map[c]--
        if(map[c] < 0) return false
    }
    return true
};