import curry from './curry'

const defaultTo = (defaultValue, data) => {
  if (data === null
    || data === undefined) {
      return defaultValue
  }

  return data
}

export default curry(defaultTo)