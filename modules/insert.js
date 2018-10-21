const curry = require("./curry");

const insert = (value, index, list) =>
  list.slice(0, index).concat(value, ...list.slice(index));

module.exports = curry(insert);
