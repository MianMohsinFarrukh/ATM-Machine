#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000;
const myPin = 2233;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin : ",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    let ansOperation = await inquirer.prompt([
        {
            name: "operation",
            message: "Select option : ",
            type: "list",
            choices: ["withdraw", "checkbalance", "fastcash"],
        }
    ]);
    if (ansOperation.operation === "withdraw") {
        let ansAmount = await inquirer.prompt([
            {
                name: "Amount",
                message: "Enter Your Amount : ",
                type: "number",
            }
        ]);
        if (myBalance >= ansAmount.Amount) {
            myBalance -= ansAmount.Amount;
            console.log(chalk.green(`Your remaining balance is : ${myBalance}`));
        }
        else {
            console.log(chalk.red(`Insufficient funds!`));
        }
    }
    else if (ansOperation.operation === "checkbalance") {
        console.log(chalk.green(`Your current balance is : ${myBalance}`));
    }
    if (ansOperation.operation === "fastcash") {
        let ansFast = await inquirer.prompt([
            {
                name: "cash",
                message: "plz select from the option below : ",
                type: "list",
                choices: ["RS:500", "RS:1000", "RS:2000", "RS:3000", "RS:4000", "RS:5000"],
            }
        ]);
        const normal = {
            "RS:500": 500,
            "RS:1000": 1000,
            "RS:2000": 2000,
            "RS:3000": 3000,
            "RS:4000": 4000,
            "RS:5000": 5000
        };
        const selectedAmount = normal[ansFast.cash];
        if (selectedAmount && myBalance >= selectedAmount) {
            myBalance -= selectedAmount;
            console.log(chalk.green(`Your remaining balance is : ${myBalance}`));
        }
        else if (selectedAmount && myBalance < selectedAmount) {
            console.log(chalk.red(`Insufficient funds!`));
        }
        else {
            console.log(chalk.red(`Invalid amount selected!`));
        }
    }
}
else {
    console.log(chalk.red `Incorrect pin code`);
}
;
