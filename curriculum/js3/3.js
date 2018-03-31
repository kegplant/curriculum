/*
 * repeatingElements - takes in array of numbers, return an array of all duplicate numbers.
 * @param {array} a
 * @return {array} b
 */

const solution = (a) => {
  const hashCount = {};
  a.forEach(num => {
    hashCount[num] = hashCount[num] ? hashCount[num] + 1 : 1;
  });
  return Object.keys(hashCount).filter(key => hashCount[key] > 1).map(Number);
}

module.exports = {
  solution
}
