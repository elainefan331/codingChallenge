# a function to traverse whole binary tree, take in node as parameter
#   set res = 0
#   traverse binary tree
#   push each node into helper function
#   res += the return value of helper function
#   return res
# helper function(pathSum), take in node and targetSum as parameters
# count valid path start from any node to any child node
#   set count = 0
#   base case: if not node --> return 0
#   if node.val === targetSum --> count++
#   count += pathSum(node.left, targetSum - node.val)
#   count += pathSum(node.right, targetSum - node.val)
#   return count