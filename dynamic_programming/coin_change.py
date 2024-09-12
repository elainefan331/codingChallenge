# https://www.youtube.com/watch?v=NNcN5X1wsaw
import math

def coinChange(coins, amount):
    if amount < 1:
        return 0
    dp = [math.inf] * (amount + 1)  #initializing a list with default values
    dp[0] = 0
    
    for i in range(1, amount + 1): #fill the dp list, i is the index of dp list and also represent the amount i column
        for c in coins: # check each coin value every time if the condition is match
            if i - c >= 0 and dp[i - c] != math.inf:
                dp[i] = min(dp[i - c] + 1, dp[i]) # 1 represent 1 coin of the current coin value, ex: 1(can represent 5 or 6 or 7 dollars) + dp[2]  
                # maybe there are more than one combinations, choose the min one
    return dp[amount] if dp[amount] != math.inf else -1
    