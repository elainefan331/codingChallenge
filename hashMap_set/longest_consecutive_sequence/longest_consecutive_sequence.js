/* 
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

====================plan================================
sort the given array
declare a max length = 0
use slide window to check if the numbers is consecutive
    - declare a left pointer at index 0
    - declare a right pointer at index 0

iterate through the given array (moving the right pointer to it's right index each time)
    - if nums[right] === nums[right - 1] + 1 == consecutive
        - compare the length of both max length and (right - left) + 1 --> take the longest one as the max length
    - if nums[right] !== nums[right - 1] + 1
        - move the left pointer to the position as same as current right pointer is

return the max length
*/

const longestConsecutive = (nums) => {
    if (nums.length === 0) return 0;

    const sortedNums = nums.sort((a, b) => a - b); // O(nlogn)
    let left = 0;
    let maxLength = 1;

    for(let right = 0; right < sortedNums.length; right++) { // O(n)
        if(sortedNums[right - 1] + 1 === sortedNums[right] || sortedNums[right - 1] === sortedNums[right]) {
            maxLength = Math.max(maxLength, (right - left) + 1)
        } else {
            left = right;
        }
    }

    return maxLength;
}

// console.log(longestConsecutive([100,4,200,1,3,2]));
// console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
console.log(longestConsecutive([1,2,0,1]));