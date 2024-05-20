/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
do not return anything, modify matrix in-place instead

====================plan==================================
declare a col set
declare a row set
go through the matrix, find the 0s, store the row and column of the 0s into the col set or row set
iterate through the matrix again, check if the element's col or row is included in col set or row set
    if it is --> convert the element to 0
return the modified matrix
*/

const setZeroes = (matrix) => {
    const col = new Set;
    const row = new Set;

    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                row.add(i);
                col.add(j);
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if (row.has(i) || col.has(j)) matrix[i][j] = 0;
        }
    }

    return matrix;
}

// console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));
// console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));