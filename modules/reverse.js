const reverse = list => {
  let result = Array.isArray(list) ? [] : "";

  for (let i = list.length - 1; i > -1; i--) {
    result = result.concat(list[i]);
  }

  return result;
};

module.exports = reverse;
