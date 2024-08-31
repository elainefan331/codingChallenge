# https://www.youtube.com/watch?v=LFzAoJJt92M
# https://www.youtube.com/watch?v=gcULXE7ViZw

def findMostLeft(root):
    cur = root.right
    root = root.right
    if cur.left:
        cur = cur.left
        root = root.left
    root = None
    return cur.val

def deleteNode(root, key):
    if not root:
        return None
    
    if key < root.val:
        deleteNode(root.left, key)
    elif key > root.val:
        deleteNode(root.right, key)
    else:
        if not root.left:
            root = root.right
        if not root.right:
            root = root.left
        if not root.right and not root.left:
            root = None
        if root.right and root.left:
            root.val = findMostLeft(root)
            
    return root
        