/*
Create an integer variable maxSum to keep track of the maximum sum of node values at any level. We start with a large negative value.
Create another variable ans to store the answer to the problem.
Create another integer variable level to store the current level through which we are iterating. We initialize it with 0.

*/
var maxLevelSum = function (root) {
    let maxsum = -100001;
    let res;
    let level=1;
    const queue = []
    queue.push(root)
    while (queue.length > 0) {
        let iterator= queue.length;
        let sum=0;
        for(let i=0;i<iterator;i++){
            let temp = queue[0];
            sum= sum + temp.val
            queue.shift();
            if (temp.left!=null){
                queue.push(temp.left)
            }
            if (temp.right!=null){
                queue.push(temp.right)
            }


        }
        if (sum>maxsum){
            maxsum= sum;
            res= level
        }
        level++;


    }
    return res

};