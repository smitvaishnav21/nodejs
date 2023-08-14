const prompt= require("prompt-sync")();

const deposit = () =>{
    const deposit = prompt("enter your deposit amount");
    const depositAmount = parseFloat(deposit);

    if(isNaN(depositAmount) || depositAmount <= 0){
        console.log("deposit amount is invalid, try agin.")
    }
    else{
        return depositAmount;
    }
}

const  getNumberOfLines = () =>{
    const lines = prompt("enter your deposit amount");
    const numberOfLines = parseFloat(lines);

    if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
        console.log("Invalid number of lines, try again.")
    }
    else{
        return numberOfLines;
    }
}

const getBet = (balance,lines) =>{
    const bet = prompt("enter your betting amount per line ");
    const numberBet = parseFloat(bet);

    if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance/lines){
        console.log("Invalid number of lines, try again.")
    }
    else{
        return numberBet;
    }
}
let balance = deposit();
var nol = getNumberOfLines();
const bet = getBet(balance,getNumberOfLines)
console.log(balance)
console.log(nol)
console.log(bet)


