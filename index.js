var fullName = "jensen alimukti"; // camel case (unta)
// var full_name = "jensen alimukti"; // snake case (ular)
var usia = 36;
var alamat;
alamat = "jakarta";

console.log("Nama lengkap: " + fullName);
console.log("Usia: " + usia);
console.log("Alamat: " + alamat);

// global dan local scope
const diskon = 10; // global scope
if (true) {
    const diskon = 50; // local scope
    console.log("diskon dalam: " + diskon)
}
console.log("diskon luar: " + diskon);

// reassigned dan redeclared
var universitas;
console.log("universitas: " + universitas);
universitas = "UGM";
console.log("universitas after assign: " + universitas);

// hoisting
hobby = "basket";
var hobby;
console.log("Hobby: " + hobby);

// deklarasi variable pakai var, setelah 2015 ada let
let ipk = 3.0,
favoriteMatkul = "javascript";
console.log("ipk: " + ipk);
console.log("Favorite mata kuliah: " + favoriteMatkul);

let name = "jensen";
console.log("name: " + name);
name = "jensen2";
console.log("name: " + name);

// const tidak boleh diubah nilainya
const ktp = "1234 1234 1234 1234";
console.log("ktp: " + ktp);
// ktp = "2345 2345 2345 2345";
// console.log("ktp: " + ktp);

const PI = Math.PI;
console.log("PI: " + PI);

// selama ini valuenya adalah string, nomor. Tetapi ada juga value object atau array
const biodata = {
    "nama": "jensen",
    "usia": 36,
    "isMarried": true, // true or false
    "domisili": "jakarta"
};
console.log("biodata before: " + biodata.domisili);
biodata.domisili = "malang";
console.log("biodata after: " + biodata.domisili);

// typeeof
console.log(typeof "jensen");
console.log(typeof 30);
console.log(typeof biodata);

// string
var string1 = 'ini satu "test2" petik';
var string2 = "ini dua 'test' petik";
var string3 = `Ini backtick
Aku bisa tanya?
Boleh.
Boleh tanya lagi?`;
console.log(string1);
console.log(string2);
console.log(string3);
console.log("Hello namaku " + name);
console.log('Hello namaku ' + name);
console.log(`Hello namaku ${name}`);

// number: integer dan decimal
var n = 10;
console.log(`${n} is ` + typeof n);
n = 10.50;
console.log(`${n} is ` + typeof n);

// infiniy dan nan
console.log(1/0);
console.log("ten" / 2);

// boolean operator
var a = 7;
var lebihBesarDari10 = a > 10 ? "ya lebih gede dari 10" : "tidak";
console.log("Apakah lebih besar dari 10: " + lebihBesarDari10);

// object
const bio1 = {
    nama: "jensen",
    usia: 36,
    isMarried: true, // true or false
    domisili: {
        kota: "jakarta",
        camat: "camat",
        rt: 'rt'
    }
};
console.log(bio1);

const bio2 = {
    "nama": "jensen",
    "usia": 36,
    "isMarried": true, // true or false
    "domisili": "jakarta"
};
console.log(bio2);

// array
const dosen = ["widodo", "nani", "susi"];
console.log(dosen[0]);
console.log(dosen[1]);
console.log(dosen[2]);
console.log(dosen[10]);
const keluarga = new Array("ian", "susan", "abc", "defin");
console.log(keluarga[0]);
console.log(keluarga[keluarga.length-1]);
console.log(keluarga.length);

const dosenKeluarga = [dosen, keluarga];
console.log(dosenKeluarga[0][0]);
console.log(dosenKeluarga[1]);

// array push, pop
const fruits = ["apel", "jeruk", "semangka"];
console.log(fruits);
fruits.push("melon");
console.log(fruits);
fruits[5] = "pisang";
console.log(fruits);
console.log(fruits.pop());
console.log(fruits.pop());
console.log(fruits.pop());

// array shift, unshift
const fruits2 = ["apel", "jeruk", "semangka"];
console.log(fruits2);
fruits2.shift();
console.log(fruits2);

fruits2.unshift("anggur");
console.log(fruits2); // anggur, jeruk, semangka

// array foreach dan filter
const fruits3 = ["tomat", "lemon", "labu"];
fruits3.forEach(function(item) {
    console.log(item);
})

const tinggi = [160, 170, 180, 165, 175];
const tinggiDiatas170 = tinggi.filter(function(t) {
    return t > 170;
})
console.log(tinggi);
console.log(tinggiDiatas170);

// map dan concat
const height = [160, 170, 180, 165, 175];
const heightKali2 = height.map(function(t) {
    return t * 2;
})
console.log(height);
console.log(heightKali2);
console.log(height);

let c = "1";
let d = "2";
console.log(+c + +d);

//
let f = 1 + 2 * 3;
console.log(f); // 7

let y = 2;
y *= 3 + 5;
console.log(y);

// latihan
const kendaraan = [
    {
        tipe: "sedan",
        roda: 4
    }, {
        tipe: "truck",
        roda: 8
    }, {
        tipe: "kereta",
        roda: 100
    }, {
        tipe: "pesawat",
        roda: 16
    }, {
        tipe: "jeep",
        roda: 6
    }
];
kendaraan.forEach(function(kkk) {
    console.log(kkk.tipe + " memiliki " + kkk.roda + " roda");
})