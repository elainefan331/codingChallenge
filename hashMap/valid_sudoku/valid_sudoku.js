/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

===================plan=====================================
declare objects of row, col, box(3*3 grid)
each object contains key-value pairs:
    - key: row / col / box_coordinate
    - value: the value of cell
    store value as set data structure
iterate through the board
    - if the value is inside the set of the same row / same col / same box --> return false
    - if not --> add the value into the set (row / col / box)

if we going through the broad and not returing false --> return true (find nothing about repetitive number in the same row / col / box sets)

*/ 

const validSudoku = (board) => {
    const row = {};
    const col = {};
    const box = {};

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const currValue = board[i][j];

            if(currValue !== ".") {
                let box_coord = `${Math.floor(i / 3)}, ${Math.floor(j / 3)}}`;
                
                if(!(i in row)) {
                    row[i] = new Set;
                } 
                
                if(!(j in col)) {
                    col[j] = new Set;
                } 

                if(!(box_coord in box)) {
                    box[box_coord] = new Set;
                }

                if(row[i].has(currValue) || col[j].has(currValue) || box[box_coord].has(currValue)) return false;
                
                row[i].add(currValue);
                col[j].add(currValue);
                box[box_coord].add(currValue);
            }
        }
    }

    return true;
}

const board1 = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

const board2 = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(validSudoku(board1));
console.log(validSudoku(board2));
