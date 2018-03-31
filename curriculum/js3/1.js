/**
 * biggestValue - takes in object, returns largest value
 * @param {object} obj
 * @returns {number} max
 */

const solution = (obj)=>{
  return Object.values(obj).reduce((max, next) => max > next ? max : next);
}

module.exports = {
  solution
}

