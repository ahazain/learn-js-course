// callback = function yg dipanggil didalam parameter
function cb1() {
    console.log("Aku adalah callback");
}
// setTimeout(cb1, 1000);

const array1 = [1, 3, 7];
const array2 = array1.map(value => value * 11);
// console.log(array1);
// console.log(array2);

// Promise
const isCorrect = function(nilai) {
    return new Promise((resolve, reject) => {
        if (nilai == 10) {
            resolve('Baik');
        } else {
            reject('Perlu ditingkatkan');
        }
    })
}
// isCorrect(10)
// .then(resolve => console.log(`111 ${resolve}`))
// .catch(reject => console.log(`111 ${reject}`));

// isCorrect(9)
// .then(resolve => console.log(`222 ${resolve}`))
// .catch(reject => console.log(`222 ${reject}`));

// async await
let adaBuku = false;

// function beliBuku
const beliBuku = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            adaBuku = true;
            resolve();
        }, 4000);
    })
}

// function gambar meminta judul sebagai parameter, return Promise
const gambar = judul => {
    if (!adaBuku) {
        return Promise.reject('Gak punya buku!');
    }
    return Promise.resolve({
        id: Date.now(),
        title: judul,
        createdAt: Date()
    });
}

// function utama akan menjalankan function lain
async function main() {
    if (!adaBuku) {
        await beliBuku(); // butuh waktu 4 detik
    }
    const hasilGambar = gambar("doraemon"); // harus tunggu 4 detik baru dijalankan
    console.log(hasilGambar);
}

main();