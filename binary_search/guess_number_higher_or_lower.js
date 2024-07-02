/*
set two pointers
    - left: point to the most left value (smallest)
    - right: point to the most right value (biggest)

while left pointer <= right pointer
    - set middle equal to the middle value in [left, right] range
    - check if the result of quess(middle) is equal to 0 --> return middle(=pick number)
        - if not
            - result === -1 --> means middle is greater than pick number
                --> move the right pointer to middle - 1
            - result === 1 --> means middle is smaller than pick number
                --> move the left pointer to middle + 1
*/ 




const guessNumber = (n) => {
    let left = 1;
    let right = n;

    while(left <= right) {
        let mid = Math.floor((right + left) / 2);
        // or let mid = left + Math.floor((right - left) / 2);

        if (guess(mid)=== 0) return mid
        else if (guess(mid) === -1) {
            right = mid - 1
        } else if (guess(mid) === 1) {
            left = mid + 1
        }
    }

}