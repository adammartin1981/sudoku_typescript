import { GRID, NUMBERS } from 'typings/index'
interface IInput {
  col: number
  grid: GRID
  value: NUMBERS
}

export const isInCol = ({ col, grid, value }: IInput): boolean => {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) return true
  }

  return false
}
