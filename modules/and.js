const curry = require("./curry");

const and = (a, b) => !!(a && b);

module.exports = curry(and);
