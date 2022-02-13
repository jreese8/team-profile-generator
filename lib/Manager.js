const Employee = require("../lib/Employee");

class Manager extends Employee {

    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber; // wasn't initially working because I didn't capitalize the first "number"
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;