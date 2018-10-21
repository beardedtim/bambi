const curry = require("./curry");
const reduce = require("./reduce");

const clone = obj => {
  if (Array.isArray(obj)) {
    return obj.slice();
  }

  return Object.assign({}, obj);
};

module.exports = curry(clone);
