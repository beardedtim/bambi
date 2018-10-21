const curry = require("./curry");

const equals = (a, b) => a === b;

module.exports = curry(equals);
