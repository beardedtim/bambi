const curry = require("./curry");

const deepMerge = (a, b) => {
  if (Array.isArray(a)) {
    return a.map((v, i) => [v, b[i]]).reduce((a, c) => a.concat(c), []);
  }

  const result = Object.assign({}, a);

  for (const key in b) {
    // we've seen it before
    if (key in result) {
      if (typeof result[key] === "object" && result[key]) {
        result[key] = deepMerge(result[key], b[key]);
      } else {
        result[key] = b[key];
      }
    } else {
      result[key] = b[key];
    }
  }

  return result;
};

module.exports = curry(deepMerge);
