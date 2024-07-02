/*
find the smallest and biggest nums of piles
declare result = 0;
binary search for k
    set left = 1;
    set right = max;
    while left <= right
        set mid = (Math.floor(left + right)) / 2
        - iterate through the piles
            - add the results of Math.ceil(pile[i] / mid) together = sum
        - if sum of results is greater than given h
            --> means the k speed is too slow
            --> move the left pointer to mid + 1
        - else
            --> store the k to result
            ---> move the right pointer to mid - 1 

return result
*/
const minEatingSpeed= (piles, h) => {
    let max = Math.max(...piles);

    let result = 0;
    let left = 1;
    let right = max;
    
    while(left <= right) {
        let mid = Math.floor((right + left) / 2);
        let sum = 0;
        for (let num of piles) {
            sum += Math.ceil(num / mid)
        }
        if (sum <= h) {
            result = mid
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return result;
}
// console.log(minEatingSpeed([312884470], 312884469))
console.log(minEatingSpeed([30,11,23,4,20], 5))