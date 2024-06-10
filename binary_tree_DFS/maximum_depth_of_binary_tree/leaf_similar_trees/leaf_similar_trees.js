/*
traverse the trees by depth first search
store the leaf node in an array
compare two array to see if the sequency is the same
*/

const leafSimilar = (root1, root2) => {
    const dfs = (root, leaves) => {
        if(!root) {
            return
        }
        if(!root.left && !root.right) {
            leaves.push(root.val)
        }

        dfs(root.left, leaves);
        dfs(root.right, leaves);
    }

    const leaf1 = [];
    const leaf2 = [];
    dfs(root1, leaf1);
    dfs(root2, leaf2);
    
   return JSON.stringify(leaf1) === JSON.stringify(leaf2);
    
}