import inquirer from "inquirer"

let todos:string[] = [];
let condition = true;

while (condition)
 {let addTask = await inquirer.prompt([
        {
            name : "firstQuestion",
            message : "would you like to add in your todo :",
            type : "input",
        },
        {
            name : "secondQuestion",
            message : "What would you like to add more in your todo :",
            type : "confirm",
            default : "true",
        },
 ]);
todos.push(addTask.firstQuestion) 
console.log(todos);

condition = addTask.secondQuestion;
}