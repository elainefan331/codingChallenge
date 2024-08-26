# 3 cases
# 1. p and q are in different subtrees, return the ancestor of them --> return root
# 2. p is the ancestor of itself, and q is in the subtree of p, return p --> return left or right (true or none == true)
# 3. q is the ancestor of itself, and p is in the subtree of q, return q --> return left or right (true or none == true)
# https://www.youtube.com/watch?v=WO1tfq2sbsI

def lowestCommonAncestor(root, p, q):
    if not root:
        return None
    
    if root == p or root == q:
        return root
    
    left = self.lowestCommonAncestor(root.left, p, q)
    right = self.lowestCommonAncestor(root.right, p, q)
    
    if left and right:
        return root
    else:
        return left or right
    