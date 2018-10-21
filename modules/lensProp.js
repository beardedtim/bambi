const curry = require("./curry");
const lensPath = require("./lensPath");

/**
 * Creates a lens at a given path
 *
 * @param {string|number} key - The key to associate this lens with
 * @return {Lens}
 */
const lensProp = key => lensPath([key]);

module.exports = curry(lensProp);
