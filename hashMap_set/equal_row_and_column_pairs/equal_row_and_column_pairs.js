/*
======================plan========================
declare a set, store the rows into the set
declare count = 0
itertate through the matrix
 - get each column and compare it with the value in the set
    - if there is the same pair
    - count++
return count

*/

const equalPairs = grid => {
    let count= 0;
    const obj = {};

    for(let arr of grid) {
        obj[arr.join(",")] ? obj[arr.join(",")] += 1 : obj[arr.join(",")] = 1
    }

    for (let i = 0; i < grid.length; i++) {
        let col = [];
        for(let j = 0; j < grid[i].length; j++) {
            let num = grid[j][i];
            col.push(num);
        }
        if (obj[col.join(",")]) {
            count += obj[col.join(",")]
        }
    }

    return count;
}

// console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]]));
console.log(equalPairs( [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]));
console.log(equalPairs([[11,1],[1,11]]));

