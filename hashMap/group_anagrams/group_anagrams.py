from collections import defaultdict


def groupAnagrams(strs):
    groups = defaultdict(list)
    
    for s in strs:
        key = "".join(sorted(s))    
        groups[key].append(s)
        
    return groups.values()


print((groupAnagrams(["eat","tea","tan","ate","nat","bat"])))

