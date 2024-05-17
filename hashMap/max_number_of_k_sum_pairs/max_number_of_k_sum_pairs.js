/*
You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.
==========================plan=====================================
declare left = 0
declare right = 0
declare count = 0

while left < right && right < nums.length
    - iterate through nums
        - if nums[left] + nums[right] = k 
            --> count++
            --> splice nums[right]
            --> left++
            --> right = left + 1
        - if nums[left] + nums[right] !== k
            --> right++
return count
*/
// const maxOperations = (nums, k) => {
//     let left = 0;
//     let right = 1;
//     let count = 0;

//     while(left < right && right < nums.length) {
//         if(nums[left] > k) {
//             left++;
//             right++;
//         } else if (nums[left] + nums[right] === k) {
//             count++;
//             nums.splice(right, 1);
//             left++;
//             right = left + 1
//         } else if(left < nums.length && right == nums.length - 1) {
//             left++;
//             right = left + 1
//         } else {
//             right++
//         }
//     }

//     return count;
// }

const maxOperations = (nums, k) => {
    let count = 0;
    const map = new Map();

    for(let num of nums) {
        let complement = k - num;

        if(map.has(complement) && map.get(complement) > 0) {
            count++;
            map.set(complement, map.get(complement) - 1)
        } else {map.set(num, (map.get(num) + 1 || 1))}
    }

    return count;
}

console.log(maxOperations([1,2,3,4], 5));
console.log(maxOperations([3,1,3,4,3], 6));
console.log(maxOperations([4,4,1,3,1,3,2,2,5,5,1,5,2,1,2,3,5,4], 2))