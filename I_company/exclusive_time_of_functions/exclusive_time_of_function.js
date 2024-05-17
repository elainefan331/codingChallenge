/*
declare an empty array - this array has n slots, each slots has a value of 0
declare a stack to store the executing functions
let previous time start from 0
iterate through logs
    - destructure the function id, action, and timestamp from log
    - if the action is start
        - calculate the time = timestamp - previous time
        - add time to the array which is storing the time of each function
        - update previous time to current timestamp
        - push the function id to the stack
    - if the action is end
        - calculete the time = timestamp - previous time + 1 (the end timestamp is inclusive)
        - add time to the function id index of array
        - pop off the function id from stack

return array
*/
const exclusiveTime = (n, logs) => {
    const stack = [];
    const array = new Array(n).fill(0);
    let preTime = 0;

    for(let log of logs) {
        let [functionId, action, timestamp] = log.split(":")

        functionId = parseInt(functionId);
        timestamp = parseInt(timestamp)

        if(action === "start") {
            let time = timestamp - preTime;
            if (stack.length > 0) {
                array[stack[stack.length - 1]] += time
            }
            stack.push(functionId);
            preTime = timestamp;
        } else {
            let time = timestamp - preTime + 1;
            array[stack.pop()] += time;
            preTime = timestamp + 1;
        }
    }

    return array;

   
}

// console.log(exclusiveTime(2, ["0:start:0","1:start:2","1:end:5","0:end:6"]));
// console.log(exclusiveTime(1, ["0:start:0","0:start:2","0:end:5","0:start:6","0:end:6","0:end:7"]));
// console.log(exclusiveTime(2, ["0:start:0","0:start:2","0:end:5","1:start:6","1:end:6","0:end:7"]));
console.log(exclusiveTime(3, ["1:start:0","0:start:2","1:start:3","2:start:4","2:end:4","0:end:6","1:end:7","1:end:8"]));