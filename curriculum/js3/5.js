/*
 * map - takes in an object and a function and calls the function with each key, value.
 * @param {object} a
 * @param {function} b
 * @return {nothing}
 **/

const solution = (a, b) => {
  Object.keys(a).forEach(key => b(key, a[key]));
}
module.exports = {
  solution
}