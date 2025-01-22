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
  if (!numbers || numbers === "") return 0;

  // console.log(numbers, "numbers");
  // Custom delimiter
  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    // Serialized numbers will have an extra slash
    const [del, nums] = numbers.split(numbers.includes("\\n") ? "\\n" : "\n");
    delimiter = new RegExp(del.slice(2));
    console.log(nums);
    numbers = nums;
  }

  const numArray = numbers.split(delimiter).map(Number);

  // Handle negatives
  const negatives = numArray.filter((num) => num < 0);
  if (negatives.length) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => (isNaN(sum + num) ? 0 : sum + num), 0);
}

export { add };
