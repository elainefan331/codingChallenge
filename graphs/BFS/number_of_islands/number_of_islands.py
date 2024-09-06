# https://www.youtube.com/watch?v=pV2kpPD66nE
# 
# def isInBound(r, c):
#   rowMax = len(grid)
#   colMax = len(grid[0])
#   return r in range(rowMax) and c in range(colMax):
# 
# 
# count = 0
#
# def BFS:
#   q = the start point to explore
#   while q:
#       r, c = q.popleft()
#       visited.add((r,c))
#       explore four dir = up, down, left, right
#           if isInBound(r, c) and (r, c) not in visited and grid[r][c] == "1":  ## check if r and c is in bound
#           add (r, c) into q
#   count + 1
# return count


def numIslands(grid):
    