def longestZigZag(root):
    longestSteps = 0
    def dfs(node, goLeft, steps):
        if node:
            nonlocal longestSteps
            logestSteps = max(steps, logestSteps)
            if goLeft:
                dfs(node.left, False, steps + 1)
                dfs(node.right, True, 1)
            else:
                dfs(node.right, True, steps + 1)
                dfs(node.left, False, 1)
        else:
            return
        
    dfs(root, True, 0)
    dfs(root, False, 0)
    return longestSteps