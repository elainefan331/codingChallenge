/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

==========================plan=========================================
declear an object that contains parentheses pairs
declear an array that contains the open parentheses --> use Object.keys()
declear an empty stack

iterate the string
- if the element is included in the open parentheses array
    --> add the element to stack
- if the element is not included in the open parentheses array
    --> check if the top of the stack is pair with the element
        - if it is not, means the order is not correct
            --> return false
        - if it is
            --> pop it out from the stack

if the length of stack == 0 --> return true
else --> return false

*/


var isValid = function(s) {
    const object = {"(": ")", "{": "}", "[": "]"};
    const openParentheses = Object.keys(object);
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (openParentheses.includes(s[i])) {
            stack.push(s[i])
        } else {
            if (object[stack.pop()] !== s[i]) return false
        }
    }

    return stack.length == 0;
};


// console.log("(){}[]")
// console.log(isValid("(]"))