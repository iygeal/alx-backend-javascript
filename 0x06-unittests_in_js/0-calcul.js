function calculateNumber(a, b) {
  // Round numbers
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  // Return their sum
  return roundedA + roundedB;
}

module.exports = calculateNumber;
