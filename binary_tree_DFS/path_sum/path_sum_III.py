# declare a helper function: dfs(node, currSum, currList)
# declare times = 0
# base case: if the node == Null --> return 0
# currSum += node.val
# currList.append(node.val)
# if currSum == targetSum --> times += 1
# if currSum > targetSum --> currList.pop(0)
# clean the list --> currList.pop()

def pathSum(root, targetSum):
    times = 0
    def dfs(node, currSum, currList):
        if not node:
            return
        currSum += node.val
        currList.append(node.val)
        
        if currSum == targetSum:
            times += 1
        elif currSum > targetSum:
            currList.pop(0)
            
        dfs(node.left, currSum, currList)
        dfs(node.right, currSum, currList)
        
        currList.pop()
    
    dfs(root, 0, [])