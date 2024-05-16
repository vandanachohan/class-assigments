var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function compareNumbers(userNumber) {
    var dynamicNumber = Math.floor(Math.random() * 100) + 1;
    if (userNumber > dynamicNumber) {
        console.log("The entered number (".concat(userNumber, ") is greater than the dynamic number value (").concat(dynamicNumber, ")."));
    }
    else if (userNumber === dynamicNumber) {
        console.log("The entered number (".concat(userNumber, ") is equal to the dynamic number value (").concat(dynamicNumber, ")."));
    }
    else {
        console.log("The entered number (".concat(userNumber, ") is less than the dynamic number value (").concat(dynamicNumber, ")."));
    }
}
rl.question('Enter a number: ', function (answer) {
    var userNumber = parseInt(answer);
    compareNumbers(userNumber);
});
