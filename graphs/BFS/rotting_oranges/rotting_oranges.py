# https://www.youtube.com/watch?v=y704fEOx0s0

# directions = [[1, 0], [-1, 0], [0, -1], [0, 1]]
# iterate through the grid
# find how many fresh fruit and rotten fruit
# add all the rotten fruit into q
# while q and fresh fruit numbers > 0
#   pop out the element from q
#   explore the neighbor of rotten friut, change the status of those fruit and add them to q
import collections
def orangesRotting(grid):
    row = len(grid)
    col = len(grid[0])
    fresh = 0
    time = 0
    q = collections.deque()
    directions = [[1, 0], [-1, 0], [0, -1], [0, 1]]
    
    
    for i in range(row):
        for j in range(col):
            if grid[i][j] == 1:
                fresh += 1
            if grid[i][j] == 2:
                q.append([i, j])
    
    while q and fresh > 0:
        length = len(q)
        for i in range(length):
            r, c = q.popleft()
            for dir in directions:
                newR = r + dir[0]
                newC = c + dir[1]
                if newR in range(row) and newC in range(col) and grid[newR][newC] == 1:
                    grid[newR][newC] = 2
                    fresh -= 1
                    q.append([newR, newC])
                    
        time += 1
   
    # ternary conditional operator (Syntax: true_value if condition else false_value)
    return time if fresh == 0 else -1