const once = fn => {
  let called = false;
  let result = null;
  return (...args) => {
    if (called) {
      return result;
    }

    result = fn(...args);
    called = true;

    return result;
  };
};

module.exports = once;
