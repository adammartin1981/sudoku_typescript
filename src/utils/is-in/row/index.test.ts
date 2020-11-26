import { GRID } from 'typings'
import { isInRow } from '.'

const gridToTest: GRID = [
  [0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]

describe('is in col', () => {
  it('should return true when number is in col', () => {
    expect(isInRow({ grid: gridToTest, row: 0, value: 1 })).toEqual(true)
    expect(isInRow({ grid: gridToTest, row: 4, value: 1 })).toEqual(true)
    expect(isInRow({ grid: gridToTest, row: 5, value: 1 })).toEqual(true)
  })

  it('should return false when number is not in col', () => {
    expect(isInRow({ grid: gridToTest, row: 0, value: 9 })).toEqual(false)
    expect(isInRow({ grid: gridToTest, row: 4, value: 9 })).toEqual(false)
    expect(isInRow({ grid: gridToTest, row: 8, value: 9 })).toEqual(false)
  })
})

export {}
