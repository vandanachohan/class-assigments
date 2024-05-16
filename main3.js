//task 3
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var friends = {
    "ARBAB": true,
    "SADHNA": true,
    "SHEBI": true,
    "ASSHU": true,
};
rl.question("Enter a name:", function (answer) {
    var name = answer.trim();
    switch (name) {
        case "ARBAB":
        case "SADHNA":
        case "SHEBI":
        case "ASSHU":
            console.log("Yes,".concat(name, " is a Friend!"));
            break;
        default:
            console.log("Sorry, ".concat(name, " is not a known friend."));
    }
    rl.close();
});
