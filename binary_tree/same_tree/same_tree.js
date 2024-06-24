/*
traverse both tree
compare the value of two nodes
    - if the values are different --> return false
    - if the values are the same --> keep traverse until all the nodes are checked
    - if couldn't find different between two trees --> return true
*/

const isSameTree = (p, q) => {
    if (p === null && q === null) return true;
    if ((p === null && q !== null) || (p !== null && q === null)) return false

    let stack1 = [p];
    let stack2 = [q];

    while(stack1.length > 0 || stack2.length > 0) {
        let curr1 = stack1.pop();
        let curr2 = stack2.pop();
        
        if (curr1.val !== curr2.val) return false
      
        if(curr1.left !== null && curr2.left !== null) {
            stack1.push(curr1.left);
            stack2.push(curr2.left);
        } else if (curr1.left === null && curr2.left !== null) {
            return false
        } else if (curr1.left !== null && curr2.left === null) {
            return false
        }

        if(curr1.right !== null && curr2.right !== null) {
            stack1.push(curr1.right);
            stack2.push(curr2.right);
        } else if (curr1.right === null && curr2.right !== null) {
            return false
        } else if (curr1.right !== null && curr2.right === null) {
            return false
        }
        
    }

    return true;
}