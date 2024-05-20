/*
==================plan============================
declare a new empty array
iterate through nums1, nums2 array
    - if nums1[i] not includes in nums2 --> push nums1[i] into newArr[0]
    - if nums2[i] not includes in nums1 --> push nums2[i] into newArr[1]
*/




const findDifference = (nums1, nums2) => {
    const result = [[],[]];

    for (let i = 0; i < Math.max(nums1.length, nums2.length); i++) {
        const ele1 = nums1[i];
        const ele2 = nums2[i];
        if(ele1 !== undefined && !(nums2.includes(ele1)) && !(result[0].includes(ele1))) {
            result[0].push(ele1)
        }

        if(ele2 !== undefined && !(nums1.includes(ele2)) && !(result[1].includes(ele2))) {
            result[1].push(ele2)
        }
    }

    return result;
}

console.log(findDifference([1,2,3], [2,4,6]));
console.log(findDifference([1,2,3,3], [1,1,2,2]));
console.log(findDifference([80,5,-20,33,26,29], [-69,0,-36,52,-84,-34,-67,-100,80]));
