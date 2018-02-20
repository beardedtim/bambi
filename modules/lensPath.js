import curry from './curry'
import path from './path'
import lens from './lens'
import assocPath from './assocPath'

/**
 * A way to create a lens for a given path
 * 
 * @param {Array<string|number>} keys - The path to the data we care about
 * @returns {Lens} - A lens to the Path
 */
export const lensPath = keys => lens(path(keys), assocPath(keys))

export default curry(lensPath)