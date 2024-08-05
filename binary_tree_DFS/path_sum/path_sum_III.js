const pathSum = (root, targetSum) => {
  let res = 0
  const dfs = (node, targetSum) => {
    if (node === null) return 0;
    let count = 0

    if (node.val === targetSum) count++

    count += dfs(node.left, targetSum - node.val)
    count += dfs(node.right, targetSum - node.val)

    return count
  }

  const treverse = (node) => {
    if (node === null) return

    res += dfs(node, targetSum)

    treverse(node.left)
    treverse(node.right)

  }
  treverse(root)
  return res
}