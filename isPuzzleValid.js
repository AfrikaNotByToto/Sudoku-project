// проверка, что число встречается только 1 раз в строке, в столбце и в квадрате
const isPuzzleValid = (curNum, curPos, puzzle, size, square) => {
  // деструктурируем текущую позицию на значение строки и столбца
  const [row, col] = curPos; // в первый раз [0, 1],

  // проверяем строки
  for (let i = 0; i < size; i += 1) {
    // если в колонке нет этого числа, возвращаем false
    if (puzzle[i][col] === curNum && i !== row) {
      return false;
    }
  }

  // проверяем колонки
  for (let j = 0; j < size; j += 1) {
    // если в строке нет этого числа, возвращаем false
    if (puzzle[row][j] === curNum && j !== col) {
      return false;
    }
  }

  // координаты начала квадрата
  const squareRow = Math.floor(row / square) * square;
  const squareCol = Math.floor(col / square) * square;

  // проверяем квадраты
  for (let m = squareRow; m < squareRow + square; m += 1) {
    for (let n = squareCol; n < squareCol + square; n += 1) {
      // если в квадрате нет этого числа, возвращаем false
      if (puzzle[m][n] === curNum && m !== row && n !== col) {
        return false;
      }
    }
  }
  // если мы вставим текущее число на текущую позицию, то поле будет валидным
  return true;
};

module.exports = isPuzzleValid;
