const curry = require("./curry");

const lte = (a, b) => a <= b;

module.exports = curry(lte);
