/*let callback = function() {
    alert("hiii klik");
    console.log("hii 3 klik");
}
document.getElementById("call1").addEventListener("click", callback);*/

// asynchronous
/*const fs = require('fs');
const callback2 = function(err, data) {
    console.log("Aku muncul kedua");
    if (err) {
        console.error("Error: ", err.message);
    }
    console.log("Isi file: " + data)
}
fs.readFile("contoh.txt", callback2);
console.log("Aku muncul pertama");*/

// synchronous
/*console.log("Aku muncul pertama");
let data = fs.readFileSync("contoh.txt");
console.log(`data: ${data}`);
console.log("Aku muncul ketiga");*/

// setTimeOut
/*console.log("Hello binarian 1");
setTimeout(() => { console.log("Hello 2");}, 1000); // 1 detik;
setTimeout(() => { console.log("Hello 4");}, 0); // 0.000 detik;
console.log("Hello 3"); */

// setInterval
/*let a = 0;
const inInterval = setInterval(() => {
    console.log(`${a++} kali jalan`);
    if (a == 10) clearInterval(inInterval);
}, 100); // 24 x 60 x 60 x 1000
console.log("Apakah aku jalan duluan");*/

// asynchronous
/*console.log("Buka restoran");
setTimeout(() => console.log("Waiter melayani tamu 1 (menu disajikan 3 detik)"), 3000);
setTimeout(() => console.log("Waiter melayani tamu 2 (menu disajikan 6 detik)"), 6000);
setTimeout(() => console.log("Waiter melayani tamu 3 (menu disajikan 1 detik)"), 1000);
setTimeout(() => console.log("Tutup restoran"), 10000);*/

// promise
/*let myPromise = new Promise((resolve) => {
    resolve("Hello sudah terpenuhi");
});
myPromise.then(resolve => {
    console.log(resolve);
});*/

// promise with resolve dan reject
/*function isPasswordCorrect(password) {
    return new Promise((resolve, reject) => {
        console.log(`password ${password}`);
        if (password != '12345') {
            return reject("Wrong password");
        }
        resolve("Password is correct");
    });
}
isPasswordCorrect("12345") // correct
.then(resolve => console.log(`11 ${resolve}`))
.catch(reject => console.log(`11 ${reject}`));

isPasswordCorrect("12346") // incorrect
.then(resolve => console.log(`22 ${resolve}`))
.catch(reject => console.log(`22 ${reject}`));*/

// contoh promise
let punyaBuku = false;
// function beliBuku
const beliBuku = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            punyaBuku = true;
            resolve();
        }, 1000);
    })
}
// function gambar meminta judul sebagai parameter, return Promise
const gambar = judul => {
    if (!punyaBuku) {
        return Promise.reject('Gak punya buku!');
    }
    console.log("Ini gak akan jalan karena 0.8 detik, sedangkan perlu 1 detik utk beli buku");
    return Promise.resolve({
        id: Date.now(),
        title: judul,
        createdAt: Date()
    });
}
// function utama akan menjalankan function lain
async function main() {
    if (!punyaBuku) {
        await beliBuku(); // butuh waktu 1 detik
        console.log(`1 ${punyaBuku}`);
    }
    console.log(`2 ${punyaBuku}`);
    const hasilGambar = await gambar("naruto");
    console.log(hasilGambar); // ga butuh waktu
}
main();