const curry = require("./curry");

/**
 * A way to actually view the value
 *
 * @param {Lens} lens - The lens to the data
 * @param {*} data - The data structure to look in
 * @return {*}
 */
const view = (lens, data) => lens.get(data);

module.exports = curry(view);
