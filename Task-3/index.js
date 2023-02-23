function createMatrix(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let j = 0; j < n; j++) {
      if (i === j || i === n - j - 1) {
        matrix[i].push(2);
      } else if ((i < j && i < n - j - 1) || (i > j && i > n - j - 1)) {
        matrix[i].push(1);
      } else {
        matrix[i].push(0);
      }
    }
  }
  return matrix;
}

console.log(createMatrix(5));
console.log(createMatrix(4));
