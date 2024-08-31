// helper function for find most left node on right side of root
const findMostLeft = (root) => {
    let cur = root.right
    while (cur.left) {
        cur = cur.left
    }

    return cur
}

const deleteNode = (root, key) => {
    if (root === null) return root
    // determine key is = > < root.val
    if (key < root.val) {
        // update root.left if there has any change
        root.left = deleteNode(root.left, key)
    } else if (key > root.val) {
        // update root.right if there has any change
        root.right = deleteNode(root.right, key)
    } else {
        if (!root.right && !root.left) {
            return null
        } else if (!root.right) {
            // root only has one left child, replace root with root.left
            return root.left
        } else if (!root.left) {
            // root only has one right child, replace root with root.right
            return root.right
        } else {
            // root has both left and right child, replace root with the most smallest value found on the right side
            root.val = findMostLeft(root).val
            // delete the duplicate node on right side
            root.right = deleteNode(root.right, root.val)
        }
    }
    // if no node is equal to key, return root itself
    return root
}