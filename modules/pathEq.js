const curry = require("./curry");
const equals = require("./equals");
const path = require("./path");

const pathEq = (p, v, d) => equals(path(p, d), v);

module.exports = curry(pathEq);
