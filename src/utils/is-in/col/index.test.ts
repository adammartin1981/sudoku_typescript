import { GRID } from 'typings'
import { isInCol } from '.'

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
    expect(isInCol({ col: 0, grid: gridToTest, value: 1 })).toEqual(true)
    expect(isInCol({ col: 4, grid: gridToTest, value: 1 })).toEqual(true)
    expect(isInCol({ col: 8, grid: gridToTest, value: 1 })).toEqual(true)
  })

  it('should return false when number is not in col', () => {
    expect(isInCol({ col: 8, grid: gridToTest, value: 9 })).toEqual(false)
    expect(isInCol({ col: 2, grid: gridToTest, value: 9 })).toEqual(false)
    expect(isInCol({ col: 4, grid: gridToTest, value: 9 })).toEqual(false)
  })
})

export {}
