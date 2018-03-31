/* 
 * xpair - takes in array and a number, return true if any pairs add
 * up to the number.
 * @param {array} a
 * @param {number} b
 * @returns {boolean}
 */

const solution = (a, b, idx = 0, lookUp = {}) => {
  if (idx >= a.length) return false;
  if (lookUp[b - a[idx]]) return true;
  lookUp[a[idx]] = true;
  return solution(a, b, idx + 1, lookUp);
}

module.exports = {
  solution
}
