import mergeOverlap from './test-2'

describe('test-2', () => {
  it('Should union all overlapping items and produce an array of non overlapping items', () => {
    const given = [{ startPx: 10, endPx: 30 }, { startPx: 55, endPx: 65 }, { startPx: 35, endPx: 50 }, { startPx: 20, endPx: 40 }, { startPx: 60, endPx: 70 }]
    const result = mergeOverlap(given)
    expect(result).toEqual([
      {
        startPx: 10,
        endPx: 50,
      },
      {
        startPx: 55,
        endPx: 70,
      },
    ])
  })

  it('Should hanlde invalid params', () => {
    const given = []
    const result = mergeOverlap(given)
    expect(result).toEqual([])
  })
})
