/*
use depth first traversal
*/

// recursive solution
// const inorderTraversal = (root, result = []) => {
//     if (root === null) return result;
    
//     inorderTraversal(root.left, result);
//     result.push(root.val) 
//     inorderTraversal(root.right, result);
//     return result;
// }

// iterative solution

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);
const g = new Node(7);


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;






const inorderTraversal = (root) => {
    let result = [];
    let stack = [];
    let curr = root;
    
    while (curr !== null || stack.length > 0) {
        while(curr !== null) {
            stack.push(curr)
            // console.log("stack", stack)
            curr = curr.left;
        }
        curr = stack.pop();
        // console.log("curr", curr.val)
        result.push(curr.val)
        // console.log("result", result);
        curr= curr.right;
        // console.log("curr.right", curr)

    }
    return result;

}

inorderTraversal(a)