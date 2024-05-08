/*
Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

===================plan===========================
- declear a minLength = Infinite
- declear left pointer at index = 0
- iterate the given array
    - if the sum is greater than or equal to target
        --> compare the current length of (right - left) and min length
        --> update the min length 
*/

const minSum = (target, nums) => {
    let minLength = Infinity;
    let sum = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            minLength = Math.min((right - left + 1), minLength)
            sum -= nums[left]
            left += 1
        }
    }

    return minLength == Infinity? 0: minLength;
}

// console.log(minSum(7, [2,3,1,2,4,3]));
// console.log(minSum(4, [1,4,4]));
// console.log(minSum(11,[1,1,1,1,1,1,1,1]));
console.log(minSum(11, [1,2,3,4,5]))