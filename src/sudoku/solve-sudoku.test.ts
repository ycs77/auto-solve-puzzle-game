import { isValidSudoku, solveSudoku } from './solve-sudoku.node'

test('can return the full board', () => {
  const board = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [5, 6, 7, 8, 9, 1, 2, 3, 4],
    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [6, 7, 8, 9, 1, 2, 3, 4, 5],
    [9, 1, 2, 3, 4, 5, 6, 7, 8],
  ]

  const solvedBoard = solveSudoku(board)

  expect(solvedBoard).toStrictEqual([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [5, 6, 7, 8, 9, 1, 2, 3, 4],
    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [6, 7, 8, 9, 1, 2, 3, 4, 5],
    [9, 1, 2, 3, 4, 5, 6, 7, 8],
  ])
  expect(isValidSudoku(solvedBoard)).toBe(true)
})

test('can solve the board', () => {
  const board = [
    [   5,    3, null, null,    7, null, null, null, null],
    [   6, null, null,    1,    9,    5, null, null, null],
    [null,    9,    8, null, null, null, null,    6, null],
    [   8, null, null, null,    6, null, null, null,    3],
    [   4, null, null,    8, null,    3, null, null,    1],
    [   7, null, null, null,    2, null, null, null,    6],
    [null,    6, null, null, null, null,    2,    8, null],
    [null, null, null,    4,    1,    9, null, null,    5],
    [null, null, null, null,    8, null, null,    7,    9],
  ]

  const solvedBoard = solveSudoku(board)

  expect(solvedBoard).toStrictEqual([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ])
  expect(isValidSudoku(solvedBoard)).toBe(true)
})
