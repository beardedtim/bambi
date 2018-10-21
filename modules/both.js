const curry = require("./curry");

const both = (fnA, fnB, state) => fnA(state) && fnB(state);

module.exports = curry(both);
