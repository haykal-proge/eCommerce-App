// Base Employee object
class Employee {
    constructor(name, position, salary, workHours) {
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.workHours = workHours;
    }

    work() {
        return `${this.name} is working.`;
    }

    getSalary() {
        return this.salary;
    }

    calculateBonus(percentage) {
        return (this.salary * percentage) / 100;
    }
}

// Staff role (inherits from Employee)
class Staff extends Employee {
    constructor(name) {
        super(name, 'Staff', 30000, 40);
    }

    handleCustomer() {
        return `${this.name} is handling customer queries.`;
    }
}

// Manager role (inherits from Employee)
class Manager extends Employee {
    constructor(name) {
        super(name, 'Manager', 60000, 45);
    }

    conductMeeting() {
        return `${this.name} is conducting a meeting.`;
    }
}

// CEO role (inherits from Employee)
class CEO extends Employee {
    constructor(name) {
        super(name, 'CEO', 150000, 60);
    }

    makeDecision() {
        return `${this.name} is making company decisions.`;
    }
}

// Example usage:
const staffMember = new Staff('Alice');
console.log(staffMember.work());
console.log(staffMember.handleCustomer());

const manager = new Manager('Bob');
console.log(manager.work());
console.log(manager.conductMeeting());

const ceo = new CEO('Carol');
console.log(ceo.work());
console.log(ceo.makeDecision());
