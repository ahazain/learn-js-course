function sayHiTo(name) {
    return `Hi ${name}`;
}

let teman = sayHiTo('kawan-kawan');
console.log(teman);

console.log(sayHiTo('Vincent'));
console.log(sayHiTo('Wahyu'));
console.log(sayHiTo('Devialdi'));

// function declaration
function tambah(a, b) {
    return a + b;
}
let c = tambah(15, 20);
console.log(c); // print 35

// function expression
const kurang = function (e, f) {
    return e - f;
}
console.log(kurang(100, 75)); // print 25

// arrow function es6
const tambah2 = (a, b) => a + b;
console.log(tambah2(6,9 )); // print 15

// currying
const perkalian3 = x => y => z => {return x * y * z};
console.log(`13 * 17 * 2 = ${perkalian3(13)(17)(2)}`);

// factorial recursion
function factorial(n) {
    // base
    if (n <= 1) {
        return n;
    }
    // recursive
    else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(6)); // 6 * 5 * ... * 2 * 1

// es6 recursion
const factorialArrowFunction = (n) => {
    // base
    if (n <= 1) {
        return n;
    }
    // recursive
    else {
        return n * factorialArrowFunction(n - 1);
    }
}
console.log(`Arrow function factorial ${factorialArrowFunction(7)}`);

function factorialWithoutRecursion(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log(factorialWithoutRecursion(5));

// luas segitiga
function luasSegitiga(alas, tinggi) {
    return alas * tinggi / 2.;
}
// volume kubus
const volumeKubus = function(sisi, s2, s3, s4) {
    return sisi * sisi * sisi;
}
// volume tabung
const PI = Math.PI;
const volumeTabung = (jarijari, tinggi) => PI * (jarijari * jarijari) * tinggi;

console.log(luasSegitiga(10, 5));
console.log(volumeKubus(3));
console.log(volumeTabung(2, 5));