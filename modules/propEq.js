const curry = require("./curry");
const pathEq = require("./pathEq");

const propEq = (prop, value, data) => pathEq([prop], value, data);

module.exports = curry(propEq);
