import { shuffleArray } from './'

describe('shuffle', () => {
  it('returns an array with the same length after shuffled', () => {
    const array = [1, 2, 3]
    console.log(array)
    shuffleArray(array)

    console.log('NEW', array)

    expect(array).toHaveLength(3)
  })

  it('returns an array with the same elements after being shuffled', () => {
    const array = [1, 2, 3]

    shuffleArray(array)

    expect(array).toContain(1)
    expect(array).toContain(2)
    expect(array).toContain(3)
  })
})
