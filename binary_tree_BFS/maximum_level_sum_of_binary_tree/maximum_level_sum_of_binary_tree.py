# BFS
# create a variable level to store currlevel
# create a variable q to store all the node value at currlevel as a list
# create a variable max = root.val
# while p.length > 0
# create a variable sum to store the sum of value
# pop out the node in q, add the node.val to sum
# after pop out all the node at currlevel
# if the sum of q is greater than max, update max and level
from collections import deque
def maxLevelSum(root):
    level = 0
    q = deque([root])
    maxSum = float('-inf')
    maxLevel = 0
    
    while len(q) > 0:
        length = len(q)
        sum = 0
        for i in range(length):
            node = q.popleft()
            if node:
                sum += node.val
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
        
        level += 1
        if sum > maxSum:
            maxSum = sum
            maxLevel = level
                
        
    return maxLevel  