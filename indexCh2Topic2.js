/*try {
    let ketinggian = height(12000);
    console.log(ketinggian);
} catch (err) {
    console.log(`Errornya: ${err}`);
}

function height(tinggi) {
    if (tinggi > 10000) {
        throw new Error("bahaya karena lebih 10.000m");
    } else {
        return "Pesawat berada di ketinggian aman";
    }
}*/

// custom error
/*class Abc {
    constructor(jenis) {
        this.jenis = jenis+"aaa";
    }
    teriak() {
        console.log(`${this.jenis}`);
    }
}

class Def extends Abc {
    constructor(jenis) {
        super(jenis);
        this.jenis3 = jenis + "bbb";
    }
    teriak() {
        console.log(`${this.jenis3} ${this.jenis}`);
    }
}
let p1 = new Abc("mamalia");
let p2 = new Def("Reptil");
p1.teriak();
p2.teriak();
*/

class CustomErrorrrr extends Error {
    constructor(message) {
        super(message);
        this.name = "Custom error";
    }
}

try {
    throw new CustomErrorrrr("Ini adalah custom errs");
} catch (err) {
    if (err instanceof CustomErr) {
        console.log(`Error dari objek CustomError: ${err.message}`);
    } else {
        console.log(`Error lainnya: ${err.message}`);
    }
}

// latihan
function takeOff(altitude) {
    if (altitude > 10000) {
        throw new Error("Ketinggian terlalu tinggi!");
    } else if (altitude < 0) {
        throw new Error("Ketinggian tidak valid");
    } else {
        return `Pesawat lepas landas menuju ketinggian ${altitude} meter.`;
    }
}

let flightSimulation = function(altitude) {
    try {
        console.log(takeOff(12000));
        console.log(takeOff(-500));
        console.log(takeOff(8000));
    } catch (err) {
        console.log(`err: ${err}`)
    }
}