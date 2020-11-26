import { GRID, NUMBERS } from 'typings/index'

interface IInput {
  grid: GRID
  row: number
  value: NUMBERS
}

export const isInRow = ({ grid, row, value }: IInput): boolean =>
  grid[row].includes(value)
