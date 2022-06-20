// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// A substring is a contiguous sequence of characters within the string.

 

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

var minWindow = function(s, t) {
    const tMap = {};
    const sMap ={};
    const m = s.length;
    const n = t.length;
    
    for(let i = 0; i < n; i++){
        const letter = t[i];
        tMap[letter] = (tMap[letter]||0) + 1;
    }
    
    let have = 0;
    let need = Object.keys(tMap).length
    let res = [-1,-1]
    let resLength = Math.pow(10,1000)
    let left = 0;
    
    for(let end = 0; end < m; end++){
        const letter = s[end];
        sMap[letter] = (sMap[letter]||0) + 1
        if(tMap.hasOwnProperty(letter) && tMap[letter] === sMap[letter]){
            have++;
        }
        
        while(have === need){
            if(end - left + 1 < resLength){
                res = [left, end]
                resLength = end - left + 1
            }
            sMap[s[left]]--
            if(tMap.hasOwnProperty(s[left]) && sMap[s[left]] < tMap[s[left]]){
                have--
            }
            left++
        }
    }
    left = res[0]
    let right = res[1]
    return s.slice(left,right+1)
};