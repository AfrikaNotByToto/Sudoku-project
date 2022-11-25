/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const findAllEmptyCell = (puzzle) => {
  const allEmptyCells = [];
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (puzzle[i][j] === '-') {
        allEmptyCells.push([i, j]);
      }
    }
  }
  return allEmptyCells;
};

const getSquare = (arr, num1, num2) => {
  const square = [];
  for (let i = num1 - 3; i < num1; i += 1) {
    for (let j = num2 - 3; j < num2; j += 1) {
      square.push(arr[j][i]);
    }
  }
  return square;
};

function solve(boardString) {
  const puzzle = [];
  for (let i = 0; i < boardString.length; i += 9) {
    puzzle.push(boardString.slice(i, i + 9).split(''));
  }
  puzzle.pop();

  // puzzle = массив строк

  const cols = Array.from({ length: puzzle[0].length }, () => []);
  for (const row of puzzle) {
    for (let j = 0; j < row.length; j += 1) {
      cols[j].push(row[j]);
    }
  }

  // cols = массив столбцов

  const squares = [];
  for (let k = 3; k < 10; k += 3) {
    for (let m = 3; m < 10; m += 3) {
      squares.push(getSquare(puzzle, m, k));
    }
  }

  // squares = массив квадратов

  console.table(puzzle);

  console.log(findAllEmptyCell(puzzle));
  const possibleNumbers = [];
  for (let i = 1; i < 10; i += 1) {
    if (Number(puzzle[0][i - 1])) {
      possibleNumbers.push(i);
    }
  }
  console.log(possibleNumbers);
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
