"""
1.sort the intervals
2.iterate through the intervals
    declare the current interval
    declare the last interval
    check if the current interval is overlapping with the last interval in the stack
    - if the current interval is partial overlapping 
        --> change the value of second index to current interval's end
    - if the current interval is complete overlapping 
        --> do nothing
    - if the current interval is not overlapping 
        --> push new interval into the stack
3.return the stack
"""
def merge(intervals):
    intervals.sort()
    stack = [intervals[0]]
    
    for i in range(1, len(intervals)):
        curr_int = {
            'start': intervals[i][0],
            'end': intervals[i][1]
        }
        
        last_int = {
            'start': stack[-1][0],
            'end': stack[-1][1]
        }
        
        if curr_int['start'] <= last_int['end'] and curr_int['end'] > last_int['end']:
            stack[-1][1] = curr_int['end']
        elif last_int['end'] < curr_int['start']:
            stack.append(intervals[i])
            
    return stack


print(merge([[1,3],[2,6],[8,10],[15,18]]))
print(merge([[1,4],[4,5]]))