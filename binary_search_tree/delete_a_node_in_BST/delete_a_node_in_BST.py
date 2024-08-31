# https://www.youtube.com/watch?v=LFzAoJJt92M
# https://www.youtube.com/watch?v=gcULXE7ViZw

def findMostLeft(root):
    cur = root.right
    while cur.left:
        cur = cur.left
    return cur

def deleteNode(root, key):
    if not root:
        return None
    
    if key < root.val:
        root.left = deleteNode(root.left, key)
    elif key > root.val:
        root.right = deleteNode(root.right, key)
    else:
        if not root.left and not root.right:
            return None
        if not root.left:
            return root.right
        if not root.right:
            return root.left
        if root.right and root.left:
            root.val = findMostLeft(root).val
            root.right = deleteNode(root.right, root.val)
            
    return root
        