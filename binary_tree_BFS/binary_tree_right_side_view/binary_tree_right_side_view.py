# https://www.youtube.com/watch?v=d4zLyf32e3I
from collections import deque


def rightSideView(root):
    res = []
    q = deque([root])
    
    while q:
        rightSide = None
        qLen = len(q)
        
        for i in range(qLen):
            node = q.popleft()
            
            if node:
                rightSide = node
                q.append(node.left)
                q.append(node.right)
        if rightSide:
            res.append(rightSide.val)
    
    return res