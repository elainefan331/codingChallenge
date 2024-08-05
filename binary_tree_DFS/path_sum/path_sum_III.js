const pathSum = (root, targetSum) => {
  let times = 0;
  const dfs = (node, currSum, currArr) => {
    if (node === null) return;

    currSum += node.val;
    currArr.push(node.val)

    if (currSum === targetSum) times += 1
    if (currSum > targetSum && currArr.length > 1) {
      currArr.shift()
    }

    dfs(node.left, currSum, currArr)
    dfs(node.right, currSum, currArr)

    currArr.pop()
  }
  dfs(root, 0, [])
  return times;
}