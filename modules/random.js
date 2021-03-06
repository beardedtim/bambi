const curry = require("./curry");

const random = (min = 1, max = 100) => {
  min = Math.floor(min);
  max = Math.ceil(max);

  return Math.floor(Math.random() * (max - min)) + min;
};

module.exports = curry(random);
