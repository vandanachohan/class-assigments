const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function compareNumbers(userNumber) {
  let dynamicNumber = Math.floor(Math.random() * 100) + 1;

  if (userNumber > dynamicNumber) {
    console.log(`The entered number (${userNumber}) is greater than the dynamic number value (${dynamicNumber}).`);
  } else if (userNumber === dynamicNumber) {
    console.log(`The entered number (${userNumber}) is equal to the dynamic number value (${dynamicNumber}).`);
  } else {
    console.log(`The entered number (${userNumber}) is less than the dynamic number value (${dynamicNumber}).`);
  }
}

rl.question('Enter a number: ', (answer) => {
  let userNumber = parseInt(answer);
  compareNumbers(userNumber);
});
