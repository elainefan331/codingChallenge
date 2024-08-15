/*
The problem is to return a list of the last elements from all levels, so it's way more natural to implement BFS here.

Time complexity is the same O(N) both for DFS and BFS since one has to visit all nodes.

Space complexity is O(H) for DFS and O(D) for BFS, where H is a tree height, and D is a tree diameter. They both result in O(N) space in the worst-case scenarios: skewed tree for DFS and complete tree for BFS.
*/