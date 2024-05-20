/*
================plan==========================
declare a newarray = s[0]- s[k-1]
vowelStr = "aeiou"
maxVowels = vowels contains by newarray 
iterate through s, start from s[k]
 - let count = 0
 - add s[k] into the newarray
 - delete newarray[0]
 - iterate through the newarray
    - if newarray[i] === vowels
        - count++
 - if count > maxVowels --> update maxVowels
return maxVowels
*/

const maxVowels = (s, k) => {
    const Vowels = "aeiouAEIOU";
    let maxVowels = 0;
    let left = 0;
    
    for(let i = 0; i < k; i++) {
        if(Vowels.includes(s[i])) {
            maxVowels++
        }
    }

    let count = maxVowels;
    for (let i = k; i < s.length; i++) {
        if(Vowels.includes(s[i])){
            count++
        }
        if(Vowels.includes(s[left])) {
            count--
        }
        left++;
        maxVowels = Math.max(maxVowels, count)
    }

    return maxVowels;
}


// console.log(maxVowels("abciiidef", 3));
// console.log(maxVowels("aeiou", 2));
console.log(maxVowels("leetcode", 3))