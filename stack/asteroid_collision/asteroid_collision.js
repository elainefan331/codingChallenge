/*
=========================plan===========================
declare an empty stack = []
iterate through the given array asteroids
    -if the ele has the same direction with the last ele in stack
        - add the ele into the stack
    - if the ele has different direction with the last ele in stack
        - compare the absolute value of two asteroid
            - if the last ele in stack is greater than the other one
                --> do nothing
            - otherwise
                --> pop out the last ele in the stack
                --> keep compare the last ele in the stack with curr ele until last ele is greater than curr ele
                    or has the same direction with the curr ele

return stack
*/
// const asteroidCollision = asteroids => {
//     const stack = [asteroids[0]];

//     for(let i = 1; i < asteroids.length; i++) {
//         const currStar = asteroids[i];

//         if ((currStar > 0 && stack[stack.length - 1] > 0) || (currStar < 0 && stack[stack.length - 1] < 0)) {
//             stack.push(currStar)
//         } else {
//             while (Math.abs(currStar) >= Math.abs(stack[stack.length - 1]) && !(currStar > 0 && stack[stack.length - 1] > 0) && !(currStar < 0 && stack[stack.length - 1] < 0)) {
//                 stack.pop()   
//             }
//             if((currStar > 0 && stack[stack.length - 1] > 0) || (currStar < 0 && stack[stack.length - 1] < 0)) {
//                 stack.push(currStar)
//             }
//         }
//     }

//     return stack;
// }

const asteroidCollision = asteroids => {
    const stack = [];

    for (let i = 0; i < asteroids.length; i++) {
        let currStar = asteroids[i];
        
        while (
            stack.length > 0 &&
            currStar < 0 && 
            stack[stack.length - 1] > 0
            ) {
            if (Math.abs(currStar) > stack[stack.length - 1]) {
                stack.pop();
                continue;
            } else if (Math.abs(currStar) === stack[stack.length - 1]) {
                stack.pop();
                currStar = 0;
                break;
            } else {
                currStar = 0;
                break;
            }
        }

        if (currStar !== 0) {
            stack.push(currStar)
        }
    }

    return stack;
}

console.log(asteroidCollision([5,10,-5]));
console.log(asteroidCollision([8,-8]));
console.log(asteroidCollision([10,2,-5]));
console.log(asteroidCollision([-2,-1,1,2]));
console.log(asteroidCollision([-2,-2,1,-2]));
