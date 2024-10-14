//Buatlah fungsi untuk menghitung BMI (Body Mass Index)
//Rumus : BMI = berat / (tinggi * tinggi),
//berat dalam kg dan tinggi dalam meter
//170 cm = 1.7 m
//Fungsi tersebut menerima 2 parameter yaitu berat dan tinggi
//Dan mengembalikan output berupa BMI

function hitungBMI(berat, tinggi){
    return berat / (tinggi * tinggi);
}

let berat = 55;
let tinggi = 1.72;
let hasil = hitungBMI(berat, tinggi);
console.log("Hasil hitung BMI = " + hasil);