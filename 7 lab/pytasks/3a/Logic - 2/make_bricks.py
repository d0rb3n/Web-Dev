def make_bricks(small, big, goal):
    max_big_used = min(big, goal // 5)
    remaining = goal - (max_big_used * 5) 
    return remaining <= small