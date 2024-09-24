// const strArr = ["javascript","java","c++"];

// function forEach(arr, callback) {
//     const newArr = [];
//     for (let i=0; i<arr.length; i++) {
//         newArr.push(callback(arr[i]));
//     }
//     return newArr;
// }

// const lenArr = forEach(strArr, function(item) {
//     return item.length;
// })
// console.log(lenArr);

// class
class Human {
    static isLivingOnEarth = true;

    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    introduce() {
        console.log(`saya ${this.name} dan tinggal di ${this.address}`);
    }

    work() {
        console.log(`${this.name} kerja di ${this.address}`);
    }
}

class Programmer extends Human {
    constructor(name, address, programmingLanguages) {
        super(name, address);
        // this.name = name;
        // this.address = address;
        this.programmingLanguages = programmingLanguages;
    }

    // overloading method karena di class Human juga ada method introduce
    introduce(hobi) {
        super.introduce();
        console.log(`I can write ${this.programmingLanguages} and my hobby is ${hobi}`);
    }

    code() {
        console.log(`I can code in ${this.programmingLanguages[Math.floor(Math.random() * this.programmingLanguages.length)]}`);
    }
}

let obama = new Human("obama", "USA");
console.log(obama.name);
console.log(obama.address);

obama.introduce();

let isyana = new Programmer("isyana", "indonesia", ["js", "java", "python"]);
isyana.introduce("playing");
isyana.code();
isyana.work();

try {
    obama.code();
} catch(err) {
    console.log(err.message);
}
console.log(isyana instanceof Human);
console.log(isyana instanceof Programmer);

// cara buat object
/*let shinta = new Human("Shinta", "bumi");
console.log(shinta.introduce());

// cara tambahin method diluar class
Human.prototype.greet = function(name) {
    console.log(`Hello nama saya ${this.name} memanggil ${name}`);
}
Human.destroy = function(thing) {
    console.log(`Human is destroying ${thing}`);
}

console.log(shinta instanceof Human);
console.log(shinta.greet("Habib"));
console.log(Human.destroy("Forest Amazon"));*/
