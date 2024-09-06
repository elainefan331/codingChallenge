import collections
# https://www.youtube.com/watch?v=pV2kpPD66nE

# rowMax = len(grid)
# colMax = len(grid[0])
# count = 0
# visited = set()

# def BFS(r, c):
#   q = collections.deque()
#   q.append((r,c))
#   visited.add((r,c))
#   while q:
#       r, c = q.popleft()
#       explore four dir = up, down, left, right
#       directions = [[1, 0], [-1, 0], [0, -1], [0, 1]]
#       for dir in directions:
#           r = r + dir[0]
#           c = c + dir[1]
#           if r in range(rowMax) and c in range(colMax) and (r, c) not in visited and grid[r][c] == "1":
#           q.append((r, c))
#           visited.add((r, c))
#   count + 1

# return count


def numIslands(grid):
    if not grid:
        return 0
    
    rowMax, colMax = len(grid), len(grid[0])
    visited = set()
    count = 0
    
    def bsf(r, c):
        q = collections.deque()
        q.append((r, c))
        visited.add((r, c))
        while q:
            row, col = q.popleft()
            directions = [[1, 0], [-1, 0], [0, -1], [0, 1]]
            for dir in directions:
                rNew = row + dir[0]
                cNew = col + dir[1]
            if rNew in range(rowMax) and cNew in range(colMax) and (rNew, cNew) not in visited and grid[rNew][cNew] == "1":
                q.append((rNew, cNew))
                visited.add((rNew, cNew))
    
    for r in range(rowMax):
        for c in range(colMax):
            if grid[r][c] == "1" and (r, c) not in visited:
                bsf(r, c)
                count += 1
    
    return count



# test
# q = collections.deque()
# q.append((0, 1))
# print("q", q)

# q.append((0, 2))
# print("q", q)

# c, r = q.popleft()
# print("pop out", c)
# print("pop out", r)
# print('q', q)


# output
# q deque([(0, 1)])
# q deque([(0, 1), (0, 2)])
# pop out 0
# pop out 1
# q deque([(0, 2)])