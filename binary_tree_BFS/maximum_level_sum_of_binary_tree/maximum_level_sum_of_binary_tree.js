const maxLevelSum = (root) => {
    let currlevel = 0
    let maxLevel = 0
    let q = [root]
    let maxSum = -Infinity
    while (q.length > 0) {
        let sum = 0
        let length = q.length

        for (let i = 0; i < length; i++) {
            let node = q.shift()

            if (node) {
                sum += node.val
                if(node.left) q.push(node.left)
                if(node.right) q.push(node.right)
            }
        }
        currlevel += 1

        if (sum > maxSum) {
            maxSum = sum
            maxLevel = currlevel
        }
    }
    return maxLevel
}