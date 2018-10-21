const curry = require("./curry");

const cond = (conditions, value) => {
  for (let [pred, fn] of conditions) {
    if (pred(value)) {
      return fn(value);
    }
  }

  return value;
};

module.exports = curry(cond);
