const findPeakElement = (nums) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right)/2);
        let prev = (mid - 1) < 0? -Infinity: nums[mid - 1];
        let next = (mid + 1) > nums.length - 1? -Infinity : nums[mid + 1];

        if ((nums[mid] > next) && (nums[mid] > prev)) {
            return mid
        } else if (nums[mid] < next) {
            left = mid + 1
        } else if (nums[mid] < prev) {
            right = mid - 1
        }
    }
}