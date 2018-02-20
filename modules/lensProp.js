import curry from './curry'
import lensPath from './lensPath'

/**
 * Creates a lens at a given path
 * 
 * @param {string|number} key - The key to associate this lens with
 * @return {Lens}
 */
export const lensProp = key => lensPath([key])

export default curry(lensProp)