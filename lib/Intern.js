const Employee = require("./Employee")
 
class Intern extends Employee{
   constructor (name, id, email, school){
       super (name, id, email, 'Intern')
       this.school = school
   }
   getName(){
    return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
       return this.email
    }

    getSchool(){
        return this.school
    }
}
 
module.exports = Intern;