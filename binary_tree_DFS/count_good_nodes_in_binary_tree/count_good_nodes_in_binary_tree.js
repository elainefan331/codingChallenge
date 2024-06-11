const goodNodes = (root) => {
    if (root === null) return 0;
    let count = 0;
    const queue = [[root, root.val]];

    while (queue.length > 0) {
        let [curr, maxVal] = queue.shift();

        maxVal = Math.max(curr.val, maxVal);

        if(curr.val >= maxVal) count++;

        if(curr.right) {
            queue.push([curr.right, maxVal]);
        }

        if(curr.left) {
            queue.push([curr.left, maxVal]);
        }
    }

    return count;

}