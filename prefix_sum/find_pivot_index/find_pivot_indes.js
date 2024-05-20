/*
calculate the total sum
left sum = 0
iterate through the given array
    - if left sum = sum - left sum - array[i] --> return i
    - if not --> left sum + array[i]

return -1
*/

const pivotIndex = (nums) => {
    let sum = 0;
    let leftSum = 0;

    for (let num of nums) {
        sum += num;
    }

    for(let i = 0; i < nums.length; i++) {
        if(leftSum === sum - leftSum - nums[i]) {
            return i
        }
        leftSum += nums[i];
    }

    return -1;
}

console.log(pivotIndex([1,7,3,6,5,6]));
console.log(pivotIndex([1,2,3]));
console.log(pivotIndex([2,1,-1]));
