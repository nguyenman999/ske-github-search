/**
 * Union all overlapping items and produce an array of non overlapping items
 * @param {Array} array
 * @returns {Array}
 */
const mergeOverlap = (arr) => {
  if (!arr || !arr.length) return []
  arr.sort((a, b) => a.startPx - b.startPx)
  const result = [arr[0]]
  arr.forEach((cur) => {
    const temp = result[result.length - 1]
    if (temp.endPx < cur.startPx) {
      result.push(cur)
    } else if (temp.endPx < cur.endPx) {
      temp.endPx = cur.endPx
    }
  })
  return result
}

export default mergeOverlap
