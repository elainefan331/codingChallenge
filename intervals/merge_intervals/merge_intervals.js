/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 
Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104

======================plan==========================================
1.sort the intervals
2.iterate through the intervals
    declare the current interval
    declare the last interval
    check if the current interval is overlapping with the last interval in the stack
    - if the current interval is partial overlapping 
        --> change the value of last interval's end(the value of second index) to current interval's end
    - if the current interval is complete overlapping 
        --> do nothing
    - if the current interval is not overlapping 
        --> push new interval into the stack
3.return the stack
*/

const merge = (intervals) => {
    intervals.sort(function(a, b){return a[0] - b[0]});
    const stack = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let currInterval = {
            'start': intervals[i][0],
            'end': intervals[i][1]
        };

        let lastInterval = {
            'start': stack[stack.length - 1][0],
            'end': stack[stack.length - 1][1]
        };

        if(currInterval['start'] <= lastInterval['end'] && currInterval['end'] > lastInterval['end']) {
            stack[stack.length - 1][1] = currInterval['end']
        } else if (currInterval['end'] > lastInterval['end']) {
            stack.push(intervals[i])
        }
    }

    return stack;
}

console.log(merge([[1,3],[8,10],[2,6],[15,18]]))