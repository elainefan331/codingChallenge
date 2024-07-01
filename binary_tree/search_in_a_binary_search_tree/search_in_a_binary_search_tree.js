/*
set the base case: if the root === null, return null
traverse the tree
    - if the root.val === val, return null
    - if the root.val < val, should keep search the value in right side of the root 
    - if the root.val > val, should keep search the value in left side of the root

*/ 

const searchBST = (root, val) => {
    if (root === null) return null;
    if (root.val === val) return root
    else if (root.val > val) {
        return searchBST(root.left, val)
    } else {
        return searchBST(root.right, val)
    }
    
    
}