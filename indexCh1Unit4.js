// Tulis program yang memeriksa apakah sebuah nomor genap atau ganjil.
// var nomor = prompt("Silakan memasukkan angka");

/*if (nomor % 2 == 0) {
    console.log(`${nomor} adalah genap`);
} else if (nomor % 2 == 1) {
    console.log(`${nomor} adalah ganjil`);
} */

// switch statement
// switch (nomor % 2) {
//     case 0:
//         console.log(`${nomor} adalah Genap`);
//         break;
//     // case 1:
//     //     console.log("Ganjil");
//     //     break;
//     default:
//         console.log(`${nomor} adalah Ganjil`);
//         break;
// }

// bmi
/*let weight = prompt("Enter weight in kg");
let height = prompt("Enter height in m");
let bmi = weight / (height * height);

if (bmi > 25) {
    console.log(`${bmi} Obesitas`);
} else if (bmi >= 20 && bmi <= 25) {
    console.log(`${bmi} Normal`);
} else {
    console.log(`${bmi} Underweight`);
}*/

// for (inisialisasi; kondisi; pengubah nilai)
/*console.log("1. Ambil kain pel");
for (let lantai=1; lantai<=5; lantai++) {
    console.log(`2. Cuci kain pel di lantai ${lantai}`);
    console.log(`3. Peras kain pel di lantai ${lantai}`);
    console.log(`4. Mengepel secara berurut di lantai ${lantai}`);
    if (lantai < 5)
        console.log("Pindah lantai...");
}
console.log("Beristirahat");*/

// while (kondisi)
/*let tingkat = 6;
while (tingkat < 11) {
    console.log(`Bersih di lantai ${tingkat}`);
    tingkat++;
}
console.log("Beristirahat");*/

// do while
let lantai = 11;
do {
    console.log(`Mengambil pel di lantai ${lantai}`)
    lantai++;
} while (lantai <= 15);

// prime numbers, mencetak bilangan prima dari 2-1000
for (let n=2; n<1000; n++) {
    if (isPrime(n)) console.log(n);
}

function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 == 0) return false;

    for (let i=3; i<=n/2; i+=2) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

// convert string to number
let s1 = "1000";
let n1 = +s1;

console.log(typeof s1 + " : " + s1);
console.log(typeof n1 + " : " + n1);