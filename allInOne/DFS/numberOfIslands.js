const numIslands = (grid) => {
  const rowLen = grid.length;
  const colLen = grid[0].length;
  const visited = Array(rowLen)
    .fill()
    .map((_) => Array(colLen).fill(false));
  let result = 0;

  const dfs = (x, y) => {
    const delta = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    visited[x][y] = true;

    for (let [dx, dy] of delta) {
      const nextX = dx + x;
      const nextY = dy + y;
      if (nextX >= 0 && nextY >= 0 && nextX < rowLen && nextY < colLen) {
        if (grid[nextX][nextY] == 1 && !visited[nextX][nextY]) {
          dfs(nextX, nextY);
        }
      }
    }
  };

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (grid[i][j] == "1" && !visited[i][j]) {
        dfs(i, j);
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
