const pathSum = (root, targetSum) => {
  let count = 0
  let res = 0
  const dfs = (node, targetSum) => {
    if (node === null) return 0;

    if (node.val === targetSum) count++

    count += dfs(node.left, targetSum - node.val)
    count += dfs(node.right, targetSum - node.val)

    return count
  }

  const treverse = (node, targetSum) => {
    if (node === null) return

    res += dfs(node, targetSum)
    treverse(node.left, targetSum)
    treverse(node.right, targetSum)

  }
  return res
}