/**
 * A simple String calculator that adds numbers from a string input.
 *
 * @param {string} numbers - A string containing numbers separated by delimiters.
 *                           Delimiters can be commas, newlines, or custom delimiters specified in the format:
 *                           "//[delimiter]\\n[numbers...]".
 * @returns {number} - The sum of the numbers in the string. Returns 0 for an empty input.
 *
 * @throws {Error} - Throws an error if negative numbers are encountered, with a message:
 *                   "negative numbers not allowed <negative_numbers>" where `<negative_numbers>`
 *                   lists all negative numbers found, separated by commas.
 *
 * @example
 * add(""); // Returns 0
 * add("1"); // Returns 1
 * add("1,5"); // Returns 6
 * add("1\n2,3"); // Returns 6
 * add("//;\n1;2"); // Returns 3
 * add("-1,2,-3"); // Throws Error: "negative numbers not allowed -1,-3"
 */
function add(numbers: string): number {
  // Check if numbers is defined or is empty
  if (typeof numbers === "undefined" || numbers === "") return 0;

  // case:split by comma
  const numArr = numbers.split(",").map(Number);

  return numArr.reduce((acc, cur) => acc + cur, 0);
}

export { add };
