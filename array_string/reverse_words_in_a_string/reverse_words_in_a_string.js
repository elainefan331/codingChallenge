/*
========================plan===============================
declare an empty new string
use s.trim() to remove the space both at the beginning and the end

iterate the s.trim() string
    - if the char is not " "
        --> add char into new string
    - if the char is " " && the char in front of it is not " "
        --> add " " into new string

reverse new string
return new string
*/
const reverseWords = (s) => {
    const str = s.trim();
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        if(str[i] !== " " || str[i] === " " && str[i - 1] !== " ") {
            newStr += str[i]
        }
    }

    const newArr = newStr.split(" ").reverse();
    return newArr.join(" ");
}

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));

