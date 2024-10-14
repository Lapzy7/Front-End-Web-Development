// Ubah exercise1 menggunakan
// 1.IIFE
// 2.Callback Function

// 1.IIFE
(function() {
    function hitungBMI(berat, tinggi){
        return berat / (tinggi * tinggi);
    }

    let berat = 55;
    let tinggi = 1.72;
    let hasil = hitungBMI(berat, tinggi);
    console.log("Hasil hitung BMI = " + hasil);
})();

// 2.Callback Function
function hitungBMI(berat, tinggi, callback){
    let bmi = berat / (tinggi * tinggi);
    callback(bmi);
}

let berat = 55;
let tinggi = 1.72;
hitungBMI(berat, tinggi, function(hasil){
    console.log("Hasil hitung BMI = " + hasil);
});

