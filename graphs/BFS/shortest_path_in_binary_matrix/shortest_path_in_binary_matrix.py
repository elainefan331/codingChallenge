import collections
def shortestPathBinaryMatrix(grid):
    rowMax = len(grid)
    colMax = len(grid[0])
    
    if grid[0][0] == 1 or grid[rowMax - 1][colMax - 1] == 1:
        return -1
    
    visited = set()
    q = collections.deque()
    q.append((0, 0, 1 ))
    visited.add((0, 0))
    
    while q:
        row, col, layer = q.popleft()
        if row == rowMax - 1 and col == colMax - 1:
            return layer
        directions = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]]
        for dir in directions:
            r = row + dir[0]
            c = col + dir[1]
            if r in range(rowMax) and c in range(colMax) and grid[r][c] == 0 and (r, c) not in visited:
                q.append((r, c, layer + 1))
                visited.add((r, c))
                
    return -1
    