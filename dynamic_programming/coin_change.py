# https://www.youtube.com/watch?v=NNcN5X1wsaw
import math

def coinChange(coins, amount):
    if amount < 1:
        return 0
    dp = [math.inf] * (amount + 1)  #initializing a list with default values
    dp[0] = 0
    
    for i in range(1, amount + 1): #fill the dp list
        for c in coins:
            if i - c >= 0 and dp[i - c] != math.inf:
                dp[i] = min(dp[i - c] + 1, dp[i])
                
    return dp[amount] if dp[amount] != math.inf else -1
    