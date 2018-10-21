const curry = require("./curry");

const lt = (a, b) => a < b;

module.exports = curry(lt);
