/*
start from any node, end at any node
traverse function
helper function to calculate longest path
    - if node === null, return 0
    - if node exist, longestPath++
    - declare goLeft = true
    - if node.left === null, goLeft = false
*/

const longestZigZag = (root) => {
    let longestPath = 0
    
    const dfs = (node, goLeft, steps) => {
        if (node) {
            longestPath = Math.max(steps, longestPath)

            if (goLeft) {
                dfs(node.left, false, steps + 1)
                dfs(node.right, true, 1)
            } else {
                dfs(node.right, true, steps + 1)
                dfs(node.left, false, 1)
            }
        }
    }

    dfs(root, true, 0)
    dfs(root, false, 0)
    
    return longestPath
}