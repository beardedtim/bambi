const curry = require("./curry");

const adjust = (transform, index, list) => [
  ...list.slice(0, index),
  transform(list[index]),
  ...list.slice(index + 1)
];

module.exports = curry(adjust);
