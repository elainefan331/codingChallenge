/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.
=================plan==========================
declare writer = 0
iterate the given array (start with reader = 0)
    - if element !==0
        - array[writer] = ele
while the writer < array.length
    - array[writer] = 0
return the array
*/

const moveZeroes = (nums) => {
   let writer = 0;

   for (let reader = 0; reader < nums.length; reader++) {
    if (nums[reader] !== 0) {
        nums[writer] = nums[reader];
        writer++
    }
   }

   while(writer < nums.length) {
    nums[writer] = 0;
    writer++
   }

   return nums;
}

// console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([0,0,1]));