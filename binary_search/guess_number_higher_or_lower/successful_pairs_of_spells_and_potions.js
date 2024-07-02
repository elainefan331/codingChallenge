const successfulPairs = (spells, potions, success) => {
    potions.sort((a,b) => a - b);
    const result = [];

    for (let i = 0; i < spells.length; i++) {
        let count = 0;
        let left = 0;
        let right = potions.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right)/2);
            if(potions[mid] * spells[i] >= success) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }

        count = potions.length - left;
        result.push(count)
    }



    return result;
}

console.log(successfulPairs([3,1,2], [8,5,8], 16))

// const successfulPairs = (spells, potions, success) => {
//     const result = []

//     for (let num of spells) {
//         let pairs = 0;
//         for (let i  = 0; i < potions.length; i++) {
//             if ((num * potions[i]) >= success) {
//                 pairs++
//             }
//             if (i === potions.length - 1) {
//                 result.push(pairs)
//             }
//         }
//     }

//     return result;
// }