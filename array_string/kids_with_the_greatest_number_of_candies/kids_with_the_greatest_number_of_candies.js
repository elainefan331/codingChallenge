/*
There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.

======================plan=======================
find the largest number of the given array
declare a new empty array to store the comparision result
iterate through the array
- add the extraCandies to the element of index i
- compare the modify element with the largest number
    - if it is larger than or equal to largest number --> push true to newArr
    - if it is smaller than --> push false to newArr 
*/

const kidsWithCandies = (candies, extraCandies) => {
    const largest = Math.max( ...candies);
    const result = [];

    for (let i = 0; i < candies.length; i++) {
        const addTogether = candies[i] + extraCandies;
        if(addTogether >= largest) result.push(true);
        else result.push(false);
    }

    return result;
}

console.log(kidsWithCandies([2,3,5,1,3], 3));
console.log(kidsWithCandies([4,2,1,1,2], 1));