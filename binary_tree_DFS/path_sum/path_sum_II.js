const pathSum = (root, targetSum) => {
    const res = []
    
    const dfs = (node, currSum, currArr) => {
        if (node === null) return;
        currSum += node.val;
        currArr.push(node.val)

        if (node.left === null && node.right === null) {
            if (currSum === targetSum) {
                res.push(currArr.slice())
            }
        }

        dfs(node.left, currSum, currArr)
        dfs(node.right, currSum, currArr)

        currArr.pop()
    }

    dfs(root, 0, [])
    return res
}