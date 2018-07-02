import curry from './curry'

const insert = (value, index, list) => list
  .slice(0, index)
  .concat(
    value,
    ...list.slice(index)
  )

export default curry(insert)
