import collections

def updateMatrix(mat):
    rows = len(mat)
    cols = len(mat[0])
    directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    q = collections.deque()
    
    for r in range(rows):
        for c in range(cols):
            if mat[r][c] == 0:
                q.append((r, c))
            else:
                mat[r][c] = -1  #placeholder
    while q:
        row, col = q.popleft()
        for dir in directions:
            newRow, newCol = row + dir[0], col + dir[1]
            if newRow not in range(rows) or newCol not in range(cols) or mat[newRow][newCol] != -1:
                continue
            else:
                mat[newRow][newCol] = mat[row][col] + 1
                q.append((newRow, newCol))
    return mat
    
    
    