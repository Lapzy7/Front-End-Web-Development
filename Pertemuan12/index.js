// 1. String Literals
let fullName = "Dika Andika";
let age = 18;
let address = "Tondano";

let kalimat =
  "Halo nama saya " +
  fullName +
  ", umur saya " +
  age +
  " tahun dan saya tinggal di " +
  address;

console.log(kalimat);

//2. Arrow Function

function sayGreetings1(fullName) {
  return `Halo nama saya ${fullName}`;
}
console.log(sayGreetings1("Dika Andika"));
