function fibonacci(num) {
  if (num === 0) return 0
  if (num === 1) return 1

  let a = 0;
  let b = 1;

  for (let i=1; i<num; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

//0 1 1 2 3 5 8 13