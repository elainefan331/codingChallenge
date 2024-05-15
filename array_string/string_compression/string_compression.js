/*
=======================plan==============================
declare num = 1
declare left = 0
iterate through the given array chars
    - if chars[i] === chars[i + 1] --> nums++ 
    - if chars[i] !== chars[i + 1] --> left++, nums = 0, chars[left] = nums
*/

const compress = (chars) => {
    let l = 0;
    let r = 0;
   
    while (r < chars.length){
        let char = chars[r];
        let count = 0;

        while(r < chars.length && chars[r] === char) {
                count++;
                r++;
        }

        chars[l] = char
        l++;

        if(count > 1) {
            for (let c of String(count)) {
                chars[l] = c;
                l++
            }
        }
        
    }
    console.log(chars)
    return l;
}

// Example usage:
let chars1 = ["a","a","b","b","c","c","c"];
let length1 = compress(chars1);
console.log(length1); // Output: 6
console.log(chars1.slice(0, length1)); // Output: ["a", "2", "b", "2", "c", "3"]

let chars2 = ["a"];
let length2 = compress(chars2);
console.log(length2); // Output: 1
console.log(chars2.slice(0, length2)); // Output: ["a"]

let chars3 = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];
let length3 = compress(chars3);
console.log(length3); // Output: 4
console.log(chars3.slice(0, length3)); // Output: ["a", "b", "1", "2"]