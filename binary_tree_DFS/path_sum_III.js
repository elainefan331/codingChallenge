function postOrder(root: TreeNode): void {
    let curr = root;
  
    const stack = [];
  
    while (stack.length || curr) {
      // Going to the bottom
      while (curr) {
        stack.push(curr);
  
        if (curr.left) {
          curr = curr.left;
        } else if (curr.right) {
          curr = curr.right;
        } else {
          curr = null;
        }
      }
  
      // the last unhandled node
      const nPopped = stack.pop();
      calcTreeNode(nPopped);
  
      // if the current node is not left child of the latest node in stack
      // than it means we already checked the right side
      // in other words - if the current node is the left child than we must go right
      if (stack.length && stack[stack.length - 1].left == nPopped) {
        curr = stack[stack.length - 1].right;
      }
    }
  }