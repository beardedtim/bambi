const curry = require("./curry");

const gt = (a, b) => a > b;

module.exports = curry(gt);
