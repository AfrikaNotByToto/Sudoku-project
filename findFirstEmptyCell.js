// поиск первой пустой ячейки
const findFirstEmptyCell = (puzzle) => {
  for (let i = 0; i < puzzle.length; i += 1) {
    for (let j = 0; j < puzzle.length; j += 1) {
      // если текущий элемент не заполнен...
      if (puzzle[i][j] === '-') {
        // ...возвращаем его позицию
        return [i, j];
      }
    }
  }
  // если пустых ячеек не осталось, возвращаем null
  return null;
};

module.exports = findFirstEmptyCell;
