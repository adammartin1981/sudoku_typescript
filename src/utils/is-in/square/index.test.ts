import { SQUARE } from 'typings/index'
import { isInSquare } from '.'
describe('isInSquare', () => {
  const square: SQUARE = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]

  it('should return true if number is in square', () => {
    expect(isInSquare({ square, value: 8 })).toEqual(true)
  })
})
