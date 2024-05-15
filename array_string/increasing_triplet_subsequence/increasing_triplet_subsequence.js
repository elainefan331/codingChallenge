/*
=======================plan==============================
if the given array length is smaller than 3 --> return false
declare the smallest = nums[0]
declare the second small variable
iterate through the given array
    - if the ele is smaller than smallest --> update smallest 
    - if the ele is greater than smallest && smaller than second samll --> update second small
    - if ele is greater than second samll --> return true
if find nothing triplet --> return false
*/

const increasingTriplet = (nums) => {
    if (nums.length < 3) return false;
    let smallest = nums[0];
    let second = Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < smallest) {
            smallest = nums[i]
        } else if (nums[i] > smallest && nums[i] < second) {
            second = nums[i]
        } else if (nums[i] > second) return true;
    }

    return false;
}


console.log(increasingTriplet([1,2,3,4,5]));
console.log(increasingTriplet([5,4,3,2,1]));
console.log(increasingTriplet([2,1,5,0,4,6]));
