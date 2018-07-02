import curry from './curry'

const is = (type, check) => {
  if (typeof type === 'string') {
    return typeof check === type
  }

  return (type && check) && (check.constructor === type || check instanceof type)
}

export default curry(is)
