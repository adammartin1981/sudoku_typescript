import { identifySquare } from 'utils'
import { GRID, NUMBERS } from 'typings/index'
import { shuffleArray } from 'utils'
import { isInCol, isInRow } from 'utils/is-in'

// const gridExample: GRID = [
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0],
// ]

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * Recursive func to fill in the grid
 * @param grid 9x9 Sudoku Grid
 */
export const fillGrid = (grid: GRID) => {
  let row = 0
  let col = 0
  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      shuffleArray(numbers)

      for (let value of numbers) {
        if (
          !isInRow({
            grid,
            row,
            value,
          })
        )
          if (
            !isInCol({
              col,
              grid,
              value,
            })
          ) {
            const square = identifySquare({
              col,
              grid,
              row,
            })
            //is it not in the grid square
            // grid[row][col] = value

            // check grid if it is full,
            // if yes stop
            // if no fillGrid
          }
      }
      break
    }
  }

  grid[row][col] = 0
}
