const makeChange = (c) => {
  // your name here
	const quarterValue = 25;
  const dimeValue = 10;
  const nickelValue = 5;
  const pennyValue = 1;

  // Initialize coin counts
  let quarters = Math.floor(c/ quarterValue);
  let remainder = c % quarterValue;

  let dimes = Math.floor(remainder / dimeValue);
  remainder %= dimeValue;

  let nickels = Math.floor(remainder / nickelValue);
  remainder %= nickelValue;

  let pennies = remainder;

  // Create and return the result object
  const result = {
    "q": quarters,
    "d": dimes,
    "n": nickels,
    "p": pennies
  };

  return result;
};

// Do not the change the code below
const c = prompt("Enter c: ");
lert(JSON.stringify(makeChange(c)));
