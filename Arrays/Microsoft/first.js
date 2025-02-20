function solution(N, M, X1, Y1, X2, Y2) {
    const grid = Array.from({ length: N }, () => Array(M).fill(0));

    for (let k = 0; k < X1.length; k++) {
        for (let i = X1[k]; i <= X2[k]; i++) {
            for (let j = Y1[k]; j <= Y2[k]; j++) {
                grid[i][j] = 1; 
            }
        }
    }

    const directions = [
        [0, 1], [0, -1], [1, 0], [-1, 0]
    ];

    const queue = [[0, 0, 0]];
    const visited = new Set();
    visited.add("0,0");

    while (queue.length > 0) {
        const [x, y, steps] = queue.shift();

        if (x === N - 1 && y === M - 1) {
            return steps;
        }

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx < N && ny >= 0 && ny < M && grid[nx][ny] === 0) {
                const key = `${nx},${ny}`;
                if (!visited.has(key)) {
                    visited.add(key);
                    queue.push([nx, ny, steps + 1]);
                }
            }
        }
    }

    return -1; // No path found
}


var N = 7;
var M = 9;
var X1 = [0,4,1,4,1,1,5,5,3];
var Y1 = [1,1,7,7,2,5,2,5,3];
var X2 = [2,5,2,6,1,1,5,5,3];
var Y2 = [1,1,7,7,3,6,3,6,5];

console.log(solution(N, M, X1, Y1, X2, Y2)); // 7