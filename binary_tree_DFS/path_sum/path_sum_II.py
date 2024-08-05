#  declear a list 
#  base case: if node == Null --> return nothing
#  if node == leaf node and sum == targetSum --> return list
#  if node is not a leaf node, add the value into sum,  add value to 

def pathSum(root, targetSum):
    result = []
    def getList(node, currSum, resultList):
        if not node:
            return
        else:
            currSum += node.val
            resultList.append(node.val)
            if not node.left and not node.right:
                if currSum == targetSum:
                    result.append(list(resultList))
                       
            getList(node.left, currSum, resultList) 
            getList(node.right, currSum, resultList)

            resultList.pop()
                
    getList(root, 0, [])
    return result