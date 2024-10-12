const numIslands = (grid) => {
  const rowLen = grid.length;
  const colLen = grid[0].length;
  const visited = Array(rowLen)
    .fill()
    .map((_) => Array(colLen).fill(false));
  let result = 0;

  const bfs = (x, y) => {
    const delta = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    const q = [];
    visited[x][y] = true;
    q.push([x, y]);

    while (q.length) {
      const [curX, curY] = q.shift();
      for (let [dx, dy] of delta) {
        const nextX = dx + curX;
        const nextY = dy + curY;
        if (nextX >= 0 && nextX < rowLen && nextY >= 0 && nextY < colLen) {
          if (grid[nextX][nextY] == 1 && !visited[nextX][nextY]) {
            visited[nextX][nextY] = true;
            q.push([nextX, nextY]);
          }
        }
      }
    }
  };

  const bfsPoint = (x, y) => {
    const delta = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    const q = [];
    let head = 0;
    q.push([x, y]);
    visited[x][y] = true;

    while (head < q.length) {
      const [curX, curY] = q[head];
      head++;

      for (let [dx, dy] of delta) {
        const nextX = dx + curX;
        const nextY = dy + curY;
        if (nextX >= 0 && nextX < rowLen && nextY >= 0 && nextY < colLen) {
          if (grid[nextX][nextY] == 1 && !visited[nextX][nextY]) {
            visited[nextX][nextY] = true;
            q.push([nextX, nextY]);
          }
        }
      }
    }
  };

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (grid[i][j] == 1 && !visited[i][j]) {
        bfsPoint(i, j);
        result++;
      }
    }
  }

  return result;
};

let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
console.log(1, numIslands(grid));

grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
console.log(3, numIslands(grid));
