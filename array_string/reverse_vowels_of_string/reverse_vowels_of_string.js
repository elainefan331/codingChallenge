/* 
=================plan====================
declare an empty array
iterate the given string
 - when the char is a vowel --> push char into the array
iterate the given string again
 - when the char is a vowel
    -replace the char with the element in reverse array
*/
const reverseVowels = (s) => {
    const vowelsArr = [];
    let newStr= "";
    const vowels = "aeiou";

    for (let i = s.length - 1; i >= 0; i--) {
        if(vowels.includes(s[i].toLowerCase())) {
            vowelsArr.push(s[i]);
        }
    }

    let j = 0;

    for (let i = 0; i < s.length; i++) {
        if(vowels.includes(s[i].toLowerCase())) {
            newStr += vowelsArr[j];
            j++
        } else newStr += s[i];
    }

    return newStr;
}

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));