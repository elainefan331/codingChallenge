/* 
======================plan============================
iterate through the given array
    - got the product of the given array

get the length of given array
declare a new empty array
while(i < the length of given arry)
    - push product / element to new array
*/

const productExceptSelf = (nums) => {
    let leftArr = [1];
    let rightArr = [1];
    let leftProduct = 1;
    let rightProduct = 1;
    const newArr = [];

    for (let i = 0; i < nums.length; i++) {
        if(i > 0) {
            leftProduct *= nums[i - 1];
            leftArr.push(leftProduct)
        }
    }
    // console.log("leftarray", leftArr);

    for(let i = nums.length - 1;i >= 0; i--) {
        if(i < nums.length - 1) {
            rightProduct *= nums[i + 1];
            rightArr.push(rightProduct)
        }
    }

    // console.log("rightarray", rightArr)
    let reverseRight = rightArr.reverse();

    for(let i = 0; i < leftArr.length; i++) {
        newArr.push(leftArr[i] * reverseRight[i])
    }

    return newArr;
}

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
// 1 left 1 right 234(24)
// 2 left 1 right 34(12)
// 3 left 12(2) right 4
// 4 left 123(6) right1