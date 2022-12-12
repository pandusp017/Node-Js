const readline = require("readline");

const readL = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
readL.question("please enter your name:", (ans)=>{
    console.log("Hello" + " " + ans);
    readL.close()
})
