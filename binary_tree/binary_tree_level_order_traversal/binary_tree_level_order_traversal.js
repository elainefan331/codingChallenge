/*
BFS
declare a queue = []
declare a result = []
add root to queue

when the queue.length is > 0
    - declare level = []

    for (let i = 0; i < queue.length; i++) 
    - let curr = shift out the element in the queue 
    - if curr is not null
        - push curr.val to level array
        - push curr.left into queue
        - push curr.right into queue
    
    if level.length > 0
    - push level into the result array

return result
*/ 

const levelOrder = root => {
    if (root === null) return [];

    const queue = [root];
    const result = [];

    while (queue.length > 0) {
        const level = [];
        let length = queue.length;
        
        for (let i = 0; i < length; i++) {
            let curr = queue.shift();
            if (curr) {
                level.push(curr.val);
                queue.push(curr.left);
                queue.push(curr.right);
            }
        }

        if (level.length > 0) {
            result.push(level)
        }

    }
    
    return result;
}