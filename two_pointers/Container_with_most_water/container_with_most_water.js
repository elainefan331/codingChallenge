/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

==================plan============================
goal: find the max area that can contain the most water

1. use two pointers point to the most left and most right line
2. calculate the area between two lines
3. compare the area between two lines and the max area
    - greater than --> replace the max area with the curr area
    - smaller than --> doing nothing
4. move the pointer of the shorter line forward to the center
    - repeat steps 2-3

*/

const maxArea = (height) => {
    let left = 0;
    let right = height.length - 1;
    let maxArea = (right - left) * Math.min(height[left], height[right]);

    while (left < right) {
        if (height[left] <= height[right]) {
            left += 1;
        } else {
            right -= 1;
        }

        let currArea = (right - left) * Math.min(height[left], height[right]);
        
        if (currArea > maxArea) {
            maxArea = currArea
        }
    }

    return maxArea;
}

// console.log(maxArea([1,8,6,2,5,4,8,3,7]));
// console.log(maxArea([1, 1]));
// console.log(maxArea([2,3,4,5,18,17,6]));