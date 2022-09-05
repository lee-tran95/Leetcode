// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.

var characterReplacement = function(s, k) {
    let l = 0;
    let map = {};
    let res = 0;
    let most = 0;
    
    for(let r = 0; r < s.length; r++){
        map[s[r]] = map[s[r]] ? map[s[r]]+1:1
        for(key in map){
                if(map[key] > most) most = map[key]
            }
        while(r - l + 1 - most > k){
            map[s[l]]--;
            l++
            for(key in map){
                if(map[key] > most) most = map[key]
            }
        }
        res = Math.max(res, r - l + 1 );
        
    }
    return res;
};

var characterReplacement = function(s, k) {
    let count = {}
    let res = 0;
    let left = 0;
    let most = 0;
    
    for(let right = 0; right < s.length; right++){
        const curr = s[right];
        count[curr] = (count[curr]||0) + 1;
        for(let key in count){
            most = Math.max(most,count[key])
        }
        while(right - left + 1 - most > k){
            count[s[left]]--
            left++
            for(let key in count){
            most = Math.max(most,count[key])
            }
        }
        res = Math.max(right-left+1)
    }
    return res
};

// O(n) time complexity
// O(n) space complexity