const curry = require("./curry");

const defaultTo = (defaultValue, data) => {
  if (data === null || data === undefined) {
    return defaultValue;
  }

  return data;
};

module.exports = curry(defaultTo);
