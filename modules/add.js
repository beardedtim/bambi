const curry = require("./curry");

const add = (a, b) => a + b;

module.exports = curry(add);
