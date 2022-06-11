// 125. Valid Palindrome
// Easy

// 3860

// 5344

// Add to List

// Share
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

var isPalindrome = function(s) {
    string = s.toLowerCase();
    string = string.replace(/[^a-z0-9]/g, '').split('');
    let left = 0;
    let right = string.length-1;
    let mid = Math.floor(string.length/2)
    while(left < mid){
        if(string[left] !== string[right]) return false;
        left++;
        right--;
    }
    return true
};