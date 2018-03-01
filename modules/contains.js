import curry from './curry'

const contains = (key, obj) => key in obj

export default curry(contains)