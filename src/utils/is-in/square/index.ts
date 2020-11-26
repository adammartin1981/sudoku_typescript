import { NUMBERS, SQUARE } from 'typings/index'

interface IInput {
  square: SQUARE
  value: NUMBERS
}

export const isInSquare = ({ square, value }: IInput): boolean => {
  for (let i = 0; i < 3; i++) {
    if (square[i].includes(value)) return true
  }
  return false
}

// grid[row].includes(value)
