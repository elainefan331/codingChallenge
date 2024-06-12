/*
find the middle index of the array
use a recursive helper function to find the middle index, left and right parts of the array
build the binary search tree
    - helper function will take in array, start index, end index
    - base case ===> if the start index > end index, return null
    - find the middle index ===> Math.floor((start index + end index) / 2)
    - create a node to build up the binary search tree ===> root = new Node(array[middle index], null, null)
    - left part of the middle index ===> root.left = helper(array, start index, middle index - 1)
    - right part of the middle index ===> root.right = helper(array, middle index + 1, end index)
    - return root
*/

const sortedArrayToBST = (nums) => {
    return helper(nums, 0, nums.length - 1);
}

const helper = (nums, start, end) => {
    if (start > end) return null; // base case

    let middleIndex = Math.floor((start + end) / 2);
    let root = new TreeNode(nums[middleIndex], null, null);
    root.left = helper(nums, start, middleIndex - 1);
    root.right = helper(nums, middleIndex + 1, end);

    return root;
}