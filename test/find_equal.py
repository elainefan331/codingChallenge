import math
def findEqual(teams, k):
    if not teams:
        return 0
    freq = {}
    for i in teams:
        if i in freq:
            freq[i] += 1
        else:
            freq[i] = 1
    maxFreq = -math.inf
    target = -math.inf
    count = 0
    for i in freq:
        if freq[i] > maxFreq:
            maxFreq = freq[i]
            target = i
            
    if k == 0:
        return maxFreq    
    for i in teams:
        if i < target:
            continue
        elif i > target and count < k:
            count += 1
    return count + maxFreq
            
    
print(findEqual([1, 2, 2, 3, 4], 2))
print(findEqual([5, 5, 6, 7, 8, 9], 3))
print(findEqual([1,2,3,4,5,6,7], 10))