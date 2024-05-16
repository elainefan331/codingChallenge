/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
=============================plan===================================
if s.length === 0 && t.length === 0 --> return true
declare a left pointer = 0
declare a right pointer = 0

iterate through s string
find the index of s[i]--> move right pointer to that index
    - if right === left && right !== 0
        --> return false
    if right >= left
        --> move left to right

if right === left pointer --> return true
return false
*/

const isSubsequence = (s, t) => {
    if(s.length === 0 && t.length === 0) return true;
    let left = 0;
    let right = 0;

    while(left < s.length && right < t.length) {
        // console.log("left1", s[left])
        // console.log("right1", t[right])
        if(s[left] !== t[right]) {
            right++;
            // console.log("left", left, s[left])
            // console.log("right", right, t[right])
        } else {
            left++;
            right++
        }
    }
    // console.log("==========", left)
    // console.log("===========", s.length - 1)
    return left === s.length
}

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));