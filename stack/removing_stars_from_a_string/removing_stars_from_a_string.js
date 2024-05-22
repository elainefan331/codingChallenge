/*
=======================plan========================
declare an empty stack = []
iterate through the string
    - if the char is not a star
        - add it to the stack
    - if the char is a star
        - pop out the last char in the stack
return stack
*/ 

const removeStars = s => {
    const stack = [];

    for (let char of s) {
        if (char !== "*") {
            stack.push(char)
        }
        if(char === "*" && stack.length >= 1) {
            stack.pop();
        } 
    }

    return stack.join("")
}

console.log(removeStars("leet**cod*e"));
console.log(removeStars("erase*****"));
