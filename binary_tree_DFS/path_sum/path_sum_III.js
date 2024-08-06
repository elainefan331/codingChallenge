/*
helper function: check if start from any node, is there any child(including current node) sum === targetSum
traverse function: traverse each node


*/


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

  const traverse = (node) => {
    if (node === null) return

    res += dfs(node, targetSum)

    traverse(node.left)
    traverse(node.right)

  }
  traverse(root)
  return res
}