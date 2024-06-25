// read command line arguments

// console.log(process.argv);

// process.argv.shift(); // remove the first element
// process.argv.shift();

// const spliced = process.argv.splice(0, 2);

// console.log(process.argv);

const slicedArray = process.argv.slice(2);

// console.log();

// console.log(slicedArray);

// const slicedArray = [ '12', '5', '10', '3.14', '4.5', '-100' ];

// sum the elements of the array

// set up a variable to hold our running sum
let sum = 0; // 0

// loop through the provided array
for (let i = 0; i < slicedArray.length; i++) {
  // add the current element to an ongoing sum
  const element = Number(slicedArray[i]);

  if (Number.isInteger(element) && element > 0) {
    sum = sum + element;
  }
}

console.log('sum:', sum); // 27 ??? undefined12510
