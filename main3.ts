//task 3
const  readline = require(`readline`);

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let friends ={
    "ARBAB": true,
    "SADHNA": true,
    "SHEBI": true,
    "ASSHU": true,
};

rl.question("Enter a name:",(answer)=>{
    let name = answer.trim();
    switch(name){
        case "ARBAB":
        case "SADHNA":
        case "SHEBI":
        case  "ASSHU":
            console.log(`Yes,${name} is a Friend!`);
            break;
            default:
            console.log(`Sorry, ${name} is not a known friend.`);     
    }

    rl.close();
});