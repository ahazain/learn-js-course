class Human {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    // private
    #doGossip = () => {
        console.log(`My address will become viral ${this.address}`);
    }
    // public
    talk() {
        console.log(this.#doGossip());
    }
    // protected
    _call() {
        console.log(`Call me as a ${this.name}`);
    }
    static #isHidingArea = true;
}

class Programmer extends Human {
    constructor(name, address, task, salary) {
        super(name, address);
        this.task = task;
        this.salary = salary;
    }
    doCall() {
        super._call();
    }
}

let sabrina = new Human("Sabrina", "Jakarta");
// console.log(sabrina.#doGossip());
let job = new Programmer("Job", "California", "developer", "$10000");
console.log(sabrina._call());
console.log(job.doCall());
console.log(job);