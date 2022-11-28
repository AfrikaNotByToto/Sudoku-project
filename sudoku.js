/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

const findFirstEmptyCell = require('./findFirstEmptyCell');
const isPuzzleValid = require('./isPuzzleValid');

function solve(boardString) {
  // создаём массив строк
  const puzzle = [];
  // заполняем конечную таблицу
  for (let i = 0; i < boardString.length; i += 9) {
    // из переданной строки берём по 9 символов и превращаем каждую в массив символов
    puzzle.push(boardString.slice(i, i + 9).split(''));
  }
  // убираем последний символ (который \r)
  if (puzzle[puzzle.length - 1].length < 2) {
    puzzle.pop();
  }

  // размер поля
  const size = puzzle.length;
  // размер квадрата поля (здесь 3х3)
  const square = size / 3;

  // проверка, что поле решаемо
  const isPuzzleSolvable = (puzzleBoard) => {
    // текущая позиция (координаты) пустой ячейки
    const currentPosition = findFirstEmptyCell(puzzleBoard);

    // если текущая позиция равна null, а не координатам,
    // значит судоку решён
    if (currentPosition === null) {
      return true;
    }

    // в цикле перебираем числа от 1 до 9
    for (let i = 1; i <= size; i += 1) {
      // превращаем текущий номер в строку,
      // т. к. в таблице у нас все номера строки
      const currentNumber = String(i);
      // проверяем валидность поля
      const isValid = isPuzzleValid(
        currentNumber,
        currentPosition,
        puzzleBoard,
        size,
        square
      );

      if (isValid) {
        // вынимаем из текущей позиции координаты
        const [x, y] = currentPosition;
        // заменяем пустую ячейку на подходящий номер (текущий)
        puzzleBoard[x][y] = currentNumber;

        // если isPuzzleSolvable от нового поля вернёт true, то поле решено
        if (isPuzzleSolvable(puzzleBoard)) {
          return true;
        }

        // если новое поле не подходит,
        // возвращаем обратно пустую ячейку
        puzzleBoard[x][y] = '-';
      }
    }

    // решений не найдено
    return false;
  };

  isPuzzleSolvable(puzzle);

  return puzzle;
}
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

function isSolved(board) {
  let result = 0;
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      result += Number(board[i][j]);
    }
  }
  if (result === 405) return true;
  return false;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */

function prettyBoard(board) {
  const xx = [];
  for (let j = 0; j < board.length; j += 1) {
    if (j % 3 === 0) {
      xx.push('---------+-----------+---------', '\n');
    }
    for (let i = 0; i < board[j].length; i += 1) {
      if (i % 3 === 2) {
        if (i % 9 === 8) {
          const res = `${board[j][i]}\n`;
          xx.push(res);
        } else {
          const res = `${board[j][i]}  |  `;
          xx.push(res);
        }
      } else {
        const res = `${board[j][i]}  `;
        xx.push(res);
      }
    }
  }
  xx.push('---------+-----------+---------');
  console.table(xx.join(''));
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
