/**
 * Replicate Array.prototype.forEach and call it gsForEach
 *   ForEach takes in a function, and that function is
 *   called for every element in the array along
 *   with the index.
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */

const solution = () => {
  Array.prototype.gsForEach = function (callback, arr = this, idx = 0) {
    if (arr.length == idx) return;
    callback(arr[idx]);
    Array.prototype.gsForEach(callback, arr, idx + 1);
  };
};

module.exports = {
  solution,
};
