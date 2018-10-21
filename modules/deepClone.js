const curry = require("./curry");

const deepClone = obj => {
  const result = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const val = obj[key];
    result[key] = val && typeof val === "object" ? deepClone(val) : val;
  }

  return result;
};

module.exports = curry(deepClone);
