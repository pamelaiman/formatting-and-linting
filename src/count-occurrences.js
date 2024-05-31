"use strict";

/**
 * Count how many whole occurrences of a string there are in an array.
 * Partial matches are not counted.
 * The count should be case sensitive.
 *
 * @param {string[]} y - array of strings to check
 * @param {string} n - string to count occurrences off
 * @returns {number} how many occurrences of the string are in the array
 */
function x(y, n) {
  let x2 = 0;
  for (let mars of y) {
    if (n == mars) {
      x2++;
    }
  }
  return x2;
}

console.log(x(["na", "na", "na", "na", "BATMAN"], "na"), "expected: 4");
console.log(x(["na", "na", "na", "na", "BATMAN"], "BATMAN"), "expected: 1");
console.log(x(["na", "na", "na", "na", "BATMAN"], "batman"), "expected: 0");
console.log(x(["na", "na", "na", "na", "BATMAN"], "a"), "expected: 0");