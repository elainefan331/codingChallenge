/*
left = 0
right = 0
maxLength = 0
iterate through the array nums
add ele into the slide window, update currLength
    - if the 0s in the slide window is not greater than k 
        - Math.max(maxLength, currLength)
    - if the 0s in the slide window is greater than k
        - move the left++ until the number of 0s is smaller or equal to k
        - update the currLength
        - update the maxLength if needed
return maxLength
*/

const longestOnes = (nums, k) => {
    let left = 0;
    let maxLength = 0;
    let currLength = 0;
    let zeroCount = 0;

    for(let right = 0; right < nums.length; right++) {
        if(nums[right] === 0) {
            zeroCount++;
            if(zeroCount <= k) {
                currLength = right - left + 1;
                maxLength = Math.max(maxLength, currLength)
            }
            if(zeroCount > k) {
                while(nums[left] !== 0) {
                    left++
                }
                left++;
                zeroCount--;
                currLength = right - left + 1;
                maxLength = Math.max(maxLength, currLength)
            }
        } else {
            currLength = right - left + 1;
            maxLength = Math.max(maxLength, currLength);
        }
    }

    return maxLength;
}

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3));