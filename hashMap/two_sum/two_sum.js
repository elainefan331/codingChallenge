/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

================================plan=================================
declear a hash map
iterate through the given array, keep tracking the index and the element
    - if the complement(target number - element value) is not inside of the hash map
        --> add the element as key, and the index as value into the hash map
    - if the complement is inside of the hash map
        --> return the index of the element and the value of the hash map key
*/

const twoSum = (nums, target) => {
    const hash = {}

    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (Object.keys(hash).includes(complement.toString())) {
            return [hash[complement], i]
        } else {
            hash[nums[i]] = i
        }
    }

} 

// console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([3,2,4], 6));
// console.log(twoSum([3, 3], 6));