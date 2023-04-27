class Solution:
    def updateMatrix(self, matrix: List[List[int]]) -> List[List[int]]:
        q = []

        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if matrix[i][j] == 0:
                    q.append([i, j, 0])
                else: 
                    matrix[i][j] = float('inf')
        
        directionSearch = [[1,0],[0,1],[-1,0],[0,-1]]

        while q:
            pos = q.pop(0)
            if matrix[pos[0]][pos[1]] > pos[2]:
                matrix[pos[0]][pos[1]] = pos[2]
            
            for d in directionSearch:
                nextPos = [pos[0] + d[0], pos[1] + d[1], pos[2] + 1]

                if nextPos[0] > -1 and nextPos[0] < len(matrix) and nextPos[1] > -1 and nextPos[1] < len(matrix[0]):
                    if matrix[nextPos[0]][nextPos[1]] == float('inf'):
                        q.append(nextPos)
        
        return matrix
