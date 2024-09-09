/* 
row range = 0 - grid.length
col range = 0 - grid[0].length
count = 0
iterate through the grid
when the cell == "1"
put the cell's row and col as argument into a helper function bfs

function bfs(row, col)
    q = []
    visited = set
    q.push([row, col])
    visited.add ("row, col")
    while q.length > 0
        ele = q.shift()
        directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
        iterate through directions
            newRow = ele[0] + dir[0]
            newCol = ele[1] + dir[1]
            if grid[newRow][newCol] === "1" && newRow in row range && newCol in col range
            q.push([newRow, newCol])
            visited.add ("newRow, newCol")

count += 1

return count

*/



const numIslands = (grid) => {
    const rowMax = grid.length
    const colMax = grid[0].length
    let count = 0
    const visited = new Set()

    const bfs = (row, col) => {
        const q = []
        q.push([row, col])
        visited.add(`${row}, ${col}`)

        while (q.length > 0) {
            let [r, c] = q.shift()
            let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
            for (let dir of directions) {
                let newRow = r + dir[0]
                let newCol = c + dir[1]
                if (newRow >=0 && newRow < rowMax && newCol >=0 && newCol < colMax) {
                    if (grid[newRow][newCol] === "1" && visited.has(`${newRow}, ${newCol}`) === false) {
                        q.push([newRow, newCol])
                        visited.add(`${newRow}, ${newCol}`)
                    }
                } 

            }
        }

    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1" && visited.has(`${i}, ${j}`) === false) {
                bfs(i, j)
                count++
            }
        }
    }

    return count
}