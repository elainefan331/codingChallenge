const pathSum = (root, targetSum) => {
    const result = []
    const dfs = (node, currSum, resultArr) => {
        if (node === null) return;
        currSum += node.val;
        resultArr.push(node.val);
        if (node.left === null && node.right === null) {
            if (currSum === targetSum)
            result.push(resultArr.slice())
        }

        dfs(node.left, currSum, resultArr)
        dfs(node.right, currSum, resultArr)

        resultArr.pop()
    }

    dfs(root, 0, [])
    return result;
}