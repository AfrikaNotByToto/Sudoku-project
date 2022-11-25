/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  // const firstSquare = [];
  // return firstSquare.split('', 9);
}
// console.log(solve(boardString));

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
function prettyBoard() {
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
