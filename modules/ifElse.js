const curry = require("./curry");

const ifElse = (pred, a, b, data) => (pred(data) ? a(data) : b(data));

module.exports = curry(ifElse);
