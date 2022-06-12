const inquirer = require("inquirer")
const fs = require("fs")
const Engineer = require("./lib/Engineer.js")
const Intern = require("./lib/Intern.js")
const Manager = require("./lib/Manager.js")
const team = require("./dist/generateHTML")

let teamArray = [];
 
const ask = () => {
   inquirer.prompt([
       {
           type: "input",
           name: "managerName",
           message: "What's your team manager's name?"
       },
       {
           type: "input",
           name: "employeeID",
           message: "What's your employee ID?"
       },
       {
           type: "input",
           name: "email",
           message: "What's your email address?"
       },
       {
           type: "input",
           name: "officeNumber",
           message: "What's your office's phone number?"
       },
       {
           type: "list",
           name: "jobTitle",
           message: "Would you like to add another team member?",
           choices: [
               "add an Engineer",
               "add an Intern",
               "Finish building my team"
           ]
       },
   ]).then (ans => {
       const manager = new Manager (ans.managerName, ans.employeeID, ans.email, ans.officeNumber)
       console.log(manager.getOfficeNumber())
       teamArray.push(manager)
       if(ans.jobTitle === "add an Engineer"){
           addEngineer();
       } else if (ans.jobTitle === "add an Intern"){
           addIntern();
       } else {
           console.log ("Generate HTML")
           console.log(teamArray)
           writeHTML();
       }
   })
 
   const addEngineer = () => {
       inquirer.prompt([
           {
               type: "input",
               name: "engineerName",
               message: "What's your name?"
           },
           {
               type: "input",
               name: "engineerID",
               message: "What's your ID?"
           },
           {
               type: "input",
               name: "engineerEmail",
               message: "What's your email address?"
           },
           {
               type: "input",
               name: "engineerGithub",
               message: "What's your github username?"
           },
           {
               type: "list",
               name: "finish",
               message: "Would you like to add another team member?",
               choices: [
                   "add an Engineer",
                   "add an Intern",
                   "Finish building my team"
               ]
           },
       ]).then(ans => {
           const engineer = new Engineer(ans.engineerName, ans.engineerID, ans.engineerEmail, ans.engineerGithub)
           teamArray.push(engineer)
           if(ans.finish === "add an Engineer"){
           addEngineer();
           } else if (ans.finish === "add an Intern"){
           addIntern();
           } else {
            console.log(teamArray)
           console.log ("Generate HTML")
           writeHTML();
       }
       })
   }
 
   const addIntern = () => {
       inquirer.prompt([
           {
               type: "input",
               name: "internName",
               message: "What's your name?"
           },
           {
               type: "input",
               name: "internID",
               message: "What's your ID?"
           },
           {
               type: "input",
               name: "internEmail",
               message: "What's your email address?"
           },
           {
               type: "input",
               name: "internSchool",
               message: "What school did you they go to?"
           },
           {
               type: "list",
               name: "finish",
               message: "Would you like to add another team member?",
               choices: [
                   "add an Engineer",
                   "add an Intern",
                   "Finish building my team"
               ]
           },
       ]).then(ans => {
           const intern = new Intern(ans.internName, ans.internID, ans.internEmail, ans.internSchool)
           teamArray.push(intern)
           if(ans.finish === "add an Engineer"){
           addEngineer();
           } else if (ans.finish === "add an Intern"){
           addIntern();
           } else {
           console.log ("Generate HTML")
           console.log(teamArray)
           writeHTML();
       }
       })
 
   }
}

ask();
 
function writeHTML(){
    console.log(team);
    fs.writeFile("index.html", team(teamArray), (err) => 
        err ? console.log("Error"): console.log ("No Error"))
}