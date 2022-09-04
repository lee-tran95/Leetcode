// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let start = 0;
    let occurrences = {};
    
    for(let i = 0; i < s.length; i++){
        if(occurrences[s[i]] >= start){
            start = occurrences[s[i]] + 1
        }
        occurrences[s[i]] = i;
        maxLength = Math.max(maxLength, i - start + 1)
    }
    return maxLength
}

var lengthOfLongestSubstring = function(s) {
    let arr = s.split('');
    let left = 0;
    let right = 0;
    let max = 0;
    let map = {};
    let currMax = 0;
    
    while(right < arr.length){
        const curr = arr[right]
        currMax++
        map[curr] = (map[curr] || 0) + 1
        if(map[curr] === 1){
            max = Math.max(max,currMax)
        }else{
            while(map[curr] !== 1){
                map[arr[left]]--
                currMax--
                left++
            }
        }
        right++
    }
    return max
};

//O(n) time complexity
//O(n) space complexity