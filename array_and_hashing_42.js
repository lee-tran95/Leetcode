// 5. Longest Palindromic Substring
// Medium
// 27.2K
// 1.6K
// Companies
// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

var longestPalindrome = function(s) {
    let max = ""
    for(let i = 0; i < s.length; i++){
        for(let j = 0; j < 2; j++){
            let left = i
            let right = i + j
            while(left >= 0 && right < s.length && s[left] === s[right]){
                if(right - left >= max.length) max = s.substring(left, right + 1)
                left--
                right++
            }
        }
    }
    return max
};