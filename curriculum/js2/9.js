/**
 * Replicate Array.prototype.reduce and call it gsReduce
 * @returns {[]}
 */

const solution = () => {
  Array.prototype.gsReduce = function (callback, accr = 0, arr = this, idx = 0) {
    if (idx == arr.length) return accr;
    return Array.prototype.gsReduce(callback, callback(accr, arr[idx]), arr, idx + 1);
  };
};

module.exports = {
  solution,
};
