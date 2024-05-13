/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

====================plan============================
declare a new empty string
iterate through both strings
- start from index 0
- end at the longest string's last index
- add char to the new string 
return the new string
*/

const mergeAlternately = (word1, word2) => {
    let newStr = "";
    const longestLength = Math.max(word1.length, word2.length)
    
    for(let i = 0; i < longestLength; i++) {
        if(i < word1.length){
            newStr += word1[i]
        }

        if(i < word2.length) {
            newStr += word2[i]
        }
    }
    
    return newStr;
}

console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("ab", "pqrs"));
console.log(mergeAlternately("abcd", "pq"));