/* 
===================plan=======================
declare an object
iterate through the arr
 - store the number as key and update the occurrences as value
 
if the all the value of the object is unique --> return true
otherwise return false
*/

const uniqueOccurrences = arr => {
    const obj = {};

    for(let num of arr) {
        if (num in obj) {
            obj[num] += 1
        } else {
            obj[num] = 1
        }
    }

    const valueArr = Object.values(obj)
    let set = new Set;
    for (let occ of valueArr) {
        if (set.has(occ)) return false;
        else set.add(occ);
    }
    return true
}

console.log(uniqueOccurrences([1,2,2,1,1,3]))
console.log(uniqueOccurrences([1,2]))
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]))