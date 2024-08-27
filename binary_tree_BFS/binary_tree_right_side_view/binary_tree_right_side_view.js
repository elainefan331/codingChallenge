/*
BFS
1. create a variable res = []
2. create a queue to store the nodes at each level
   create a variable mostRight to store the most right node

while q.length > 0
iterate through the current queue
3. pop out the first element in queue
   if the element is !== null --> add ele.left and ele.right into queue
4. if the pop element is !== null --> update the most right node

after each iteration
5. if the most right node had found --> store it into res

6. return res

time complexity: O(n)
space complexity: O(D) where D is diameter ==> O(n/2)
(In a complete binary tree, the maximum number of nodes at the last level (which is the widest level) is close to N/2, where N is the total number of nodes in the tree. )

*/


const rightSideView = (root) => {
    const res = []
    const q = [root]
    while (q.length > 0) {
        let qLen = q.length
        let mostRight = null

        for (let i = 0; i < qLen; i++) {
            let node = q.shift()
    
            if (node !== null) {
                mostRight = node
                q.push(node.left)
                q.push(node.right)
            }
        }
    
        if (mostRight !== null) {
            res.push(mostRight.val)
        }
    }

    return res
}