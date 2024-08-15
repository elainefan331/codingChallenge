# 3 cases
# 1. p and q are in different subtrees, return the ancestor of them
# 2. p is the ancestor of itself, and q is in the subtree of p, return p
# 3. q is the ancestor of itself, and p is in the subtree of q, return q

def lowestCommonAncestor(root, p, q):
    if not root:
        return None
    