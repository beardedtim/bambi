import fl from 'fantasy-land'
import and from './and'
import contains from './contains'
import curry from './curry'

const isFantasy = (k, o) => and(contains(k, fl), contains(fl[k], o))

export default curry(isFantasy)