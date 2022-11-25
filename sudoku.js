/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

// размер поля
const size = puzzle.length;
// размер квадрата поля (здесь 3х3)
const square = size / 3;

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

// проверка, что число встречается только 1 раз в строке, в столбце и в квадрате
const isPuzzleValid = (curNum, curPos, puzzle) => {
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
    for (let n = squareCol; n < squareCol + square; n += 1) {}
    // если в квадрате нет этого числа, возвращаем false
    if (puzzle[m][n] === curNum && m !== row && n !== col) {
      return false;
    }
  }
  // если мы вставим текущее число на текущую позицию, то поле будет валидным
  return true;
};

function solve(boardString) {
  // создаём массив строк
  const puzzle = [];
  // заполняем конечную таблицу
  for (let i = 0; i < boardString.length; i += 9) {
    // из переданной строки берём по 9 символов и превращаем каждую в массив символов
    puzzle.push(boardString.slice(i, i + 9).split(''));
  }
  // убираем последний символ (который \r)
  puzzle.pop();

  const isPuzzleSolvable = () => {
    // текущая позиция (координаты) пустой ячейки
    const currentPosition = findFirstEmptyCell(puzzle);

    // если текущая позиция равна null, а не координатам,
    // значит судоку решён
    if (currentPosition === null) {
      return true;
    }

    // в цикле перебираем числа от 1 до 9
    for (let i = 1; i <= size; i += 1) {
      const currentNumber = String(i);
      const isValid = isPuzzleValid(
        currentNumber,
        currentPosition,
        puzzle,
        size
      );
    }

    // решений не найдено
    return false;
  };

  isPuzzleSolvable();

  console.table(puzzle);
  return puzzle;
}
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
