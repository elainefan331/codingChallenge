var pathSum = function(root, targetSum) {
    let count = 0;

    // Helper function to find paths starting from the current node
    const findPaths = (node, targetSum) => {
        if (node === null) return 0;

        let res = 0;

        // If the current node's value equals the target sum, increment result
        if (node.val === targetSum) res++;

        // Continue searching for paths in the left and right subtrees with updated target sum
        res += findPaths(node.left, targetSum - node.val);
        res += findPaths(node.right, targetSum - node.val);

        return res;
    };

    // DFS to traverse the tree
    const dfs = (node) => {
        if (node === null) return;

        // Find all paths starting from the current node that sum to targetSum
        count += findPaths(node, targetSum);

        // Continue DFS traversal
        dfs(node.left);
        dfs(node.right);
    };

    // Start DFS traversal from the root
    dfs(root);

    return count;
};