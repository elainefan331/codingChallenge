/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

============================plan============================
declare a empty object
iterate through the given array
    - sort the string
        - if the sorted string is not a key of object, store it as a key-value pair into the object
        - if it is a key of object, add the string into the value(an array)
return the values of object
*/

const groupAnagrams = (strs) => {
    const object = {};
    
    for(let i = 0; i < strs.length; i++) {
        const sortedStr = strs[i].split("").sort().join("");
        if (sortedStr in object) {
            object[sortedStr].push(strs[i])
        } else {
            object[sortedStr] = [strs[i]]
        }
    }

    return Object.values(object);
}

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));

