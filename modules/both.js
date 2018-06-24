import curry from './curry'

const both = (fnA, fnB, state) => fnA(state) && fnB(state)

export default curry(both)