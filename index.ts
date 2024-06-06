#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
   console.log(chalk.magentaBright("\n\n*****WELLCOME*****\n"));
const randomNumber:number = Math.floor(10000 + Math.random()*90000);
let myBalance:number = 0;
 let answer = await inquirer.prompt([{
    name: "students",
    type: "input",
    message: "Enter student name :",
    validate: function (value){
        if (value.trim() !==""){
            return true;
        }
        return "Please enter a non-empty value."
    },

 },
 {
    name: "courses",
    type: "list",
    message:"Select the course to enrolled",
    choices: [ "MS.Office", "HTML" , "Javascript" , "Typescript" , "Python" ] 
 }
]
);
const tutionfee:{[key:string]:number}= {
    "MS.Office" : 2000,
    "HTML":2500,
    "Javascript" :5000,
    "Typescript" :6000,
    "Python" : 10000
};
 console.log(chalk.green(`\n Tution Fee:${tutionfee[answer.courses]}/-\n`));
 console.log(chalk.blue(`Balance:${myBalance}\n`));
  let Paymenttype=await inquirer.prompt([{
    name:"payment",
    type:"list",
    message:"Select payment method",
    choices: ["Bank Transfer", "Easypaisa" , "Jazzcash"]
  },
  {
    name:"amount",
    type:"input",
    message:"Transfer Money:",
    validate: function (value){
        if (value.trim() !==""){
            return true;
        }
        return "Please enter a non-empty value."

    },
  }

  
]);
console.log(`\n You select a payment method ${Paymenttype.payment}\n`);
const tutionfees= tutionfee[answer.courses];
const paymentAmount= parseFloat(Paymenttype.amount)
if  (tutionfees===paymentAmount){
    console.log(chalk.green(`Congratulations you have successfully enrolled in ${answer.courses}.\n`));
    let ans = await inquirer.prompt([{
        name: "select",
        type: "list",
        message:"What would you like to do next?",
        choices:["View Status", "Exit"]

    }
]);
  if (ans.select==="View Status"){
    console.log(chalk.blue("\n*******Status*******\n"));
    console.log(chalk.green(`Student Name; ${answer.students}`));
    console.log(chalk.blue(`Student ID:${randomNumber}`));
    console.log(chalk.green(`Course: ${answer.courses}`));
    console.log(chalk.blue(`Tution Fees Paid : ${paymentAmount}`));
    console.log(chalk.green(`Balance:${myBalance += paymentAmount}`));
  }
}else
{
    console.log(chalk.blue("\n Exiting Student Management System \n"));
};










