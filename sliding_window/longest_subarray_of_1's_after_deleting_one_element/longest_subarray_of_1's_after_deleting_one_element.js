/*
======================plan=========================
let maxLength = 0
let left = 0
let right = 0
if nums.length === 1 --> return 0
if no zero in nums --> return nums.length - 1
iterate through the array nums
    - if sliding window(left - right) contains more than 1 0s
        - move left pointer until it only contain maximum 1 zero
        - calculate currentLength
        - update maxLength if needed
    - if sliding window contain 1 0s or less than 1 zero
        - calculate currentLength
        - update maxLength if needed
*/

const longestSubarray = nums => {
    if (nums.length === 1) return 0;
    if (nums.includes(0) === false) return nums.length - 1;

    let left = 0;
    let maxLength = 0;
    let currentLength = 0;
    let zeroCount = 0
    
    for(let right = 0; right < nums.length; right++) {
        if(nums[right] === 0) {
            zeroCount++;
            if(zeroCount > 1) {
                while(nums[left] === 1) {
                    left++;
                }
                left++;
                zeroCount--;
                currentLength = right - left;
                maxLength = Math.max(maxLength, currentLength);
            } else {
                currentLength = right - left;
                maxLength = Math.max(maxLength, currentLength);
            }
        } else {
            currentLength++;
            maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
}

console.log(longestSubarray([1,1,0,1]));
console.log(longestSubarray([0,1,1,1,0,1,1,0,1]));
console.log(longestSubarray([1,1,1]));
console.log(longestSubarray([1,0,0,0,0]));