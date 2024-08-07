# a function to traverse whole binary tree, take in node as parameter
#   set res = 0
#   traverse binary tree
#   push each node into helper function
#   res += the return value of helper function
#   return res
# helper function(pathCount), take in node and targetSum as parameters
# count valid path start from any node to any child node
#   set count = 0
#   base case: if not node --> return 0
#   if node.val === targetSum --> count++
#   count += pathCount(node.left, targetSum - node.val)
#   count += pathCount(node.right, targetSum - node.val)
#   return count

def pathSum(root, targetSum):
    res = 0
    def pathCount(node, targetSum):
        count = 0
        if not node:
            return 0
        if node.val == targetSum:
            count += 1
        count += pathCount(node.left, targetSum - node.val)
        count += pathCount(node.right, targetSum - node.val)
        
        return count
    def dfs(node):
        if not node:
            return
        nonlocal res
        # tell python res is not only local variable inside dfs
        res += pathCount(node, targetSum)
        dfs(node.left)
        dfs(node.right)
    dfs(root)
    return res