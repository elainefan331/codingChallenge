"""
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
"""

def isValid(s):
    stack = []
    
    close_to_open_dict = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    
    for char in s:
        if char not in close_to_open_dict:
            stack.append(char)
        # if stack is empty, stack[-1] will raise an IndexError --> need to set a condition to avoid that
        elif not stack or stack[-1] != close_to_open_dict[char]:
            return False
        else:
            stack.pop()
            
    return len(stack) == 0

# print(isValid("(){}[]"))
# print(isValid("(]"))
    
