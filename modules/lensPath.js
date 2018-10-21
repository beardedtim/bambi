const curry = require("./curry");
const path = require("./path");
const lens = require("./lens");
const assocPath = require("./assocPath");

/**
 * A way to create a lens for a given path
 *
 * @param {Array<string|number>} keys - The path to the data we care about
 * @returns {Lens} - A lens to the Path
 */
const lensPath = keys => lens(path(keys), assocPath(keys));

module.exports = curry(lensPath);
