/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

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

  // размер поля
  const size = puzzle.length;
  // размер квадрата поля (здесь 3х3)
  const square = size / 3;

  const isPuzzleSolvable = () => {
    // текущая позиция (координаты) пустой ячейки
    const currentPosition = findFirstEmptyCell(puzzle);

    // если текущая позиция равна null, а не координатам,
    // значит судоку решён
    if (currentPosition === null) {
      return true;
    }

    // решений не найдено
    return false;
  };

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
