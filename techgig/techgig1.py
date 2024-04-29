import sys
def neighboringCells(a,b,size):
    neighbors = [
            [a-1,b-1],
            [a-1,b],
            [a-1,b+1],
            [a,b-1],
            [a,b],
            [a,b+1],
            [a+1,b-1],
            [a+1,b],
            [a+1,b+1]
        ]
    validNeighbors = []
    for i in neighbors:
        if((i[0]-1 >= 0 and i[0] < size) or (i[0] == 0)):
            if((i[1]-1 >= 0 and i[1] < size) or (i[1] == 0)):
                validNeighbors.append(i)
    return validNeighbors

def min_for_this_number(neighbors, matrix):
    min=sys.maxsize
    for vertices in neighbors:
        if(min > matrix[vertices[0]][vertices[1]]):
            min =  matrix[vertices[0]][vertices[1]]
    return min

def find_min(size,matrix):
    maxMin = -sys.maxsize-1
    minVerticesArray = []
    for i in range(0,size):
        for j in range(0,size):
            neighbors = neighboringCells(i,j,size)
            min = min_for_this_number(neighbors,matrix)
            if(maxMin < min):
                maxMin = min
                minVerticesArray=[]
                minVerticesArray.append('{}#{}'.format(i+1,j+1))
            elif(maxMin == min):
                minVerticesArray.append('{}#{}'.format(i+1,j+1))
    return minVerticesArray


# 4
# 12#45#33#27
# 94#54#23#53
# 98#59#27#62
# 11#51#67#13
print(find_min(4, [[12,45,33,27],[94,54,23,53],[98,59,27,62],[11,51,67,13]]))
# 3
# 12#45#33
# 94#54#23
# 98#59#27
print(find_min(3, [[12,45,33],[94,54,23],[98,59,27]]))
