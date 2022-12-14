// 1170. Compare Strings by Frequency of the Smallest Character
// Medium
// 574
// 930
// Companies
// Let the function f(s) be the frequency of the lexicographically smallest character in a non-empty string s. For example, if s = "dcce" then f(s) = 2 because the lexicographically smallest character is 'c', which has a frequency of 2.

// You are given an array of strings words and another array of query strings queries. For each query queries[i], count the number of words in words such that f(queries[i]) < f(W) for each W in words.

// Return an integer array answer, where each answer[i] is the answer to the ith query.

 

// Example 1:

// Input: queries = ["cbd"], words = ["zaaaz"]
// Output: [1]
// Explanation: On the first query we have f("cbd") = 1, f("zaaaz") = 3 so f("cbd") < f("zaaaz").
// Example 2:

// Input: queries = ["bbb","cc"], words = ["a","aa","aaa","aaaa"]
// Output: [1,2]
// Explanation: On the first query only f("bbb") < f("aaaa"). On the second query both f("aaa") and f("aaaa") are both > f("cc").

var numSmallerByFrequency = function(queries, words) {
    function f(s){
        let smallest;
        let count;

        for(let char of s){
            if(!smallest || char < smallest){
                smallest = char;
                count = 1
            }else if(char === smallest){
                count++
            }
        }
        return count
    }

    let wordFreq = new Map();
    for(let word of words){
        for(let i = 1; i <= f(word); i++){
            wordFreq.set(i, (wordFreq.get(i) || 0) + 1)
        }
    }

    let ans = [];
    for(let i = 0; i < queries.length; i++){
        ans[i] = wordFreq.get(f(queries[i])+1) || 0
    }
    return ans
};