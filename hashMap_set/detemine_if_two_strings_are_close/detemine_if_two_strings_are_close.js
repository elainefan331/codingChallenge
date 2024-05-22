/*
===================plan===============
declare obj1, obj2 as empty objects
iterate through the string(word1, word2)
    - store the char(as key) and occurance(as value) into the obj1, obj2
- if the values of objects share the same occurance --> return true
- if not --> return false
*/

const closeStrings = (word1, word2) => {
    if(word1.length !== word2.length) return false;
    const obj1 = {};
    const obj2 = {};

    for(let i = 0; i < word1.length; i++) {
        let char1 = word1[i];
        let char2 = word2[i];

        if(char1 in obj1) {
            obj1[char1] += 1;
        } else {
            obj1[char1] = 1;
        }

        if(char2 in obj2) {
            obj2[char2] += 1;
        } else {
            obj2[char2] = 1;
        }
    }
    const keyObj1 = Object.keys(obj1).sort();
    const keyObj2 = Object.keys(obj2).sort();
    const valueObj1 = Object.values(obj1).sort();
    const valueObj2 = Object.values(obj2).sort();

    return valueObj1.join("") === valueObj2.join("") && keyObj1.join("") === keyObj2.join("");
}

// console.log(closeStrings("abc", "bca"));
// console.log(closeStrings("a", "aa"));
// console.log(closeStrings("cabbba", "abbccc"));
// console.log(closeStrings("abbzccca", "babzzczc"));
console.log(closeStrings("uau", "ssx"))