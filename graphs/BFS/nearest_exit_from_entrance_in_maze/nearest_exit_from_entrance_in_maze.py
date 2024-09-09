# add current cell into q
# pop element from q, if the element is on the boarder and not the entrance: return steps
# directions = [[1, 0], [-1, 0], [0, -1], [0, 1]]
# explore four directions, if it is empty, add it to the q
import collections
def nearestExit(maze, entrance):
    q = collections.deque()
    maxRow, maxCol = len(maze), len(maze[0])
    visited = set()
    directions = [[1, 0], [-1, 0], [0, -1], [0, 1]]
    
    q.append((entrance[0], entrance[1], 0))
    visited.add((entrance[0], entrance[1]))
    
    while q:
        r, c, steps = q.popleft()
        if r == 0 or r == maxRow - 1 or c == 0 or c == maxCol - 1:
            if (r, c) != (entrance[0], entrance[1]) and maze[r][c] == ".":
                return steps
        for dir in directions:
            newRow = r + dir[0]
            newCol = c + dir[1]
            if newRow in range(maxRow) and newCol in range(maxCol) and maze[newRow][newCol] == "." and (newRow, newCol) not in visited:
                q.append((newRow, newCol, steps + 1))
                visited.add((newRow, newCol))
                
    return -1
            
    
