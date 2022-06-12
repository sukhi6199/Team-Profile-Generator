const Employee = require("./Employee")
 
class Engineer extends Employee{
   constructor (name, id, email, github){
       super (name, id, email, 'Engineer')
       this.github = github
   }

   getName(){
    console.log(this.name)
    return this.name

    }

    getId(){
        console.log(this.id)
        return this.id

    }

    getEmail(){
        console.log(this.email)
        return this.email

    }

    getGithub(){
        console.log(this.github)
        return this.github

    }
}
 
module.exports = Engineer;