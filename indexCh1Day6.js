class Person {
    constructor(name, address, gender) {
        this.name = name;
        this.address = address;
        this.gender = gender;
    }

    setName(name) {
        this.name = name;
    }
    getName(name) {
        return this.name
    }
}

class Guru extends Person {
    constructor(mataPelajaran) {
        this.mataPelajaran = mataPelajaran;
    }
}

let person1 = new Person("Ahmad", "Jember", "M");
let person2 = new Person("Budi", "Surabaya", "M");
console.log(person1);
person2.setName("Dani");
console.log(`person2 nama = ${person2.getName()}`);

// characteristic OOP
// 1. inheritance
// 2. encapsulation
// 3. polymorphism

// class rumah
class Rumah {
    static isInIndonesia = true;

    constructor(jalan, kota) {
        this.jalan = jalan;
        this.kota = kota;
    }

    lokasi() {
        console.log(`Lokasi rumah ini di ${this.kota} jalan ${this.jalan}`);
    }
}
console.log(Rumah.isInIndonesia);
Rumah.prototype.rumah1 = (provinsi, kota) => {
    console.log(`Rumah tersedia di ${provinsi}, kota ${kota}`);
}

Rumah.expand = (meter) => {
    console.log(`Rumah telah berekspansi ${meter}`);
}

let rumahBaru = new Rumah('Gajahmada', 'Tangerang');
console.log(rumahBaru);

console.log(rumahBaru instanceof Rumah);
console.log(rumahBaru.lokasi());

console.log(rumahBaru.rumah1("DKI Jakarta", "Jakarta"));
console.log(Rumah.expand("50m"));