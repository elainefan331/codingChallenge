/*
sum = 0
if root node === null
    return false
if root node !== null
    sum += root.val
    base case: if currnode.right === null and currnode.left === null
                    return sum === target sum
    return hasPathSum(root.right, targetSum) || hasPathSum(root.left, targetSum)

*/
const hasPathSum = (root, targetSum) => {
    const pathSum = (node, sum) => {
        if (node === null) return false
        else {
            sum += node.val;
            if(node.right === null && node.left === null) {
                return sum === targetSum
            } else {
                return pathSum(node.left, sum) || pathSum(node.right, sum)
            }
        }
    }
    return pathSum(root, 0)
}