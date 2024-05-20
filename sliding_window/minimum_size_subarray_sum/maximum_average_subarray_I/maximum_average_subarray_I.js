/*
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
=========================plan===========================
declare left = 0
declare newarray = nums[0]-nums[0 + k - 1]
max = sum set / k
iterate through the nums array, start at nums[0 + k]
add nums[i] into set
delete nums[left]
left++
current max = current set sum/ k
if max < current max --> update max

return max


*/

const findMaxAverage = (nums, k) => {
    const arrayWindow = nums.slice(0, k);
    let sum = arrayWindow.reduce(function(x, y){
        return x + y
    }, 0)
    let avg = sum / k;
    let max = avg;
    let left = 0;

    for (let right = k; right < nums.length; right++) {
        sum = sum - nums[left] + nums[right];
        let currAvg = sum / k
        max = Math.max(max, currAvg)
        left++;
    }

    return max;
}

// console.log(findMaxAverage([1,12,-5,-6,50,3], 4));
// console.log(findMaxAverage([5], 1));
console.log(findMaxAverage([4,2,1,3,3], 2));