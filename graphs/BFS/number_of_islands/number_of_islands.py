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
#       visited.add((r,c))
#       explore four dir = up, down, left, right
#           if isInBound(r, c) and (r, c) not in visited and grid[r][c] == "1":  ## check if r and c is in bound
#           add (r, c) into q
#   count + 1

# return count


# def numIslands(grid):
#     if not grid:
#         return 0
    
#     rowMax, colMax = len(grid), len(grid[0])
#     visited = set()
#     count = 0
    
    
    
    
    
#     return count


q = collections.deque()
q.append((0, 1))
print("q", q)
q.append((0, 2))
print("q", q)
c = q.popleft()
print("pop out", c)
# print("pop out", r)
print('q', q)
