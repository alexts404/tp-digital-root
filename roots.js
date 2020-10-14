// In this TP you are expected to write a function that returns the digital root of a given number.
// The digital root is the recursive sum of all the digits in a number.

// Given a number n, take the sum of the digits of n. If that value has more than one digit,
// continue reducing in this way until a single-digit number is produced. Assume that the input will be a non-negative integer.

// Examples:
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function sumDigits(number) {
  let digits;
  try {
    digits=number.toString().split('');
  } catch (err) {
    return 0;
  }
  let sum = 0;
  for (let digit of digits) {
    sum += parseInt(digit);
  }
  return sum;
}

function digitalRoots (number) {
  if (number < 0) return 0;
  if (number < 10) return number;
  return digitalRoots(sumDigits(number));
};

module.exports = digitalRoots;
