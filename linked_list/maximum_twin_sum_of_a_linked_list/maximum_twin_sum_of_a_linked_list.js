/*
================plan===================
let stack = []
iterate through the linked list, store the value into stack
let maxSum = -infinite
iterate through the stack
 - compare the maxSum and the sum of stack[i] + stack.pop()
return maxSum
*/

const pairSum = (head) => {
    if(head === null) return 0;
    const stack = [];
    let curr = head;
    
    while(curr) {
        stack.push(curr.val);
        curr = curr.next
    }

    let maxSum = -Infinity;
   
    for(let i = 0; i < stack.length; i++) {
        let currSum = stack[i] + stack.pop();
        maxSum = Math.max(maxSum, currSum)
    }

    return maxSum;

}