const extractMinMax = (list, property) => {
  return list.reduce(
    (result, item) => {
      const value = item[property]

      if (!result[0]) {
        result[0] = value
      }
      if (!result[1]) {
        result[1] = value
      }

      if (result[0] > value) {
        result[0] = value
      }
      if (result[1] < value) {
        result[1] = value
      }

      return result
    },
    [undefined, undefined]
  )
}

export default extractMinMax
