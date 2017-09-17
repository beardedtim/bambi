import curry from './curry'
import prop from './prop'

const path = curry((keys, obj) => {
  let state = prop(keys[0], obj)

  for(let i = 1; i < keys.length; i++) {
    if (state === undefined) {
      return state
    }

    state = prop(keys[i], state)
  }

  return state
})

export default path