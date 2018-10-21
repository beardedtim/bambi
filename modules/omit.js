const curry = require("./curry");

const omit = (keys, obj) => {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    result[key] = value;
  }

  keys.forEach(key => {
    delete result[key];
  });

  return result;
};

module.exports = curry(omit);
