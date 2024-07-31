def hasPathSum(root, targetSum):
    def pathSum(node, sum):
        if not node:
            return False
        sum += node.val
        if not node.left and not node.right:
            return sum == targetSum
        else:
            return pathSum(node.left, sum) or pathSum(node.right, sum)
    return pathSum(root, 0)