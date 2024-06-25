#! /usr/bin/env node
// INSTALLATION 
import inquirer from 'inquirer';
import chalk from 'chalk';
// code
console.log("Welcome to mu5f1r currency convertor!");
let currConvertor = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0028,
        "PKR": 1,
    },
    "GBP": {
        "USD": 1.26,
        "PKR": 350.76,
        "GBP": 1,
    },
    "USD": {
        "PKR": 277.54,
        "GBP": 0.79,
        "USD": 1,
    },
};
let answer = await inquirer.prompt([{
        type: "list",
        name: "from",
        message: chalk.yellow("From which currency?"),
        choices: ["PKR", "USD", "GBP"],
    },
    {
        type: "list",
        name: "to",
        messsage: chalk.yellow("To which currency?"),
        choices: ["PKR", "USD", "GBP"],
    },
    {
        type: "number",
        name: "smount",
        message: chalk.yellow("Please enter the amount you wish to convert."),
    },
]);
// let {from, to, amount} = answer;
// if (from && to && amount){
//     let res = currConvertor[from][to] * amount; 
//     console.log (chalk.bold.green(`Your conversion from ${from } to ${to} is ${res}.`));
// } else {
//     console.log (chalk.bold.red(`INVALID CONVERSION!`))
// };
let amountFrom = currConvertor[answer.from];
let amountTo = currConvertor[answer.to];
let amount = answer.amount;
let base_amount = amount / amountFrom;
let converted_amount = base_amount * amountTo;
console.log(converted_amount.toFixed(2));
