import curry from './curry'
import reduce from './reduce'

const clone = obj => {
  if (Array.isArray(obj)) {
    return obj.slice()
  }

  return Object.assign({}, obj)
}

export default curry(clone)