const curry = require("./curry");

const uppercase = str => str.toUpperCase();

module.exports = curry(uppercase);
