// Pelajari konsep destructuring dan buat contoh:
// - Destructuring (Array & Object)
// - Destructuring dengan mengambil sebagian item (Array & Object)
// - Destructuring dengan menggunakan default value (Array & Object)
// - Destructuring dengan menggunakan rest operator (Array & Object)
// Dengan menggunakan konsep destructuring coba anda cari di exercise6 bagian mana yang bisa diubah dengan destructuring.

// - Destructuring (Array & Object)
// Destructuring Array
const fruits = ["rambutan", "durian", "lengkeng"];

const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);

// Destructing Object
const student = {
  name: "Andika",
  age: 18,
  kelas: "Front-End Web Development - B",
};

// Destructuring object
const { name, age, kelas } = student;

console.log(name);
console.log(age);
console.log(kelas);

// - Destructuring dengan mengambil sebagian item (Array & Object)
// Array
const numbers = [10, 20, 30, 40, 50];

const [first, second, third, fourth, fiveth] = numbers;

console.log(first);
console.log(third);
console.log(fiveth);

// Object
const car = {
  brand: "Nissan",
  model: "Skyline R34",
  year: 2002,
  color: "white",
};

const { brand, color } = car;

console.log(brand);
console.log(color);

// - Destructuring dengan menggunakan default value (Array & Object)
// Array
const colors = ["red", "green"];

const [firstColor, secondColor, thirdColor = "blue"] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

// Object
const supra = {
  model: "Supra MK4",
  year: 1994,
  engine: "2JZ-GTE",
};

const {
  model,
  year,
  engine,
  carcolor = "white",
  transmission = "manual",
} = supra;

console.log(model);
console.log(year);
console.log(engine);
console.log(carcolor);
console.log(transmission);

// - Destructuring dengan menggunakan rest operator (Array & Object)
// Array
const numbers2 = [10, 20, 30, 40, 50];

const [satu, dua, ...sisa] = numbers;

console.log(satu);
console.log(dua);
console.log(sisa);

// Object
const mobil = {
  brandMobil: "Nissan",
  model: "Skyline R34",
  year: 2002,
  color: "white",
};

const { brandMobil, ...sisanya } = car;

console.log(brand);
console.log(sisanya);

// Dengan menggunakan konsep destructuring coba anda cari di exercise6
// bagian mana yang bisa diubah dengan destructuring.
// Exercise 6
// Pada bagian 1. Let & Const
const calculateAge = function (birthYear) {
  return 2019 - birthYear;
};

const yearUntilRetirement = function ({ year, firstName }) {
  const age = calculateAge(year);
  const retirement = 60 - age;

  console.log(
    `${firstName} ${
      retirement > 0 ? `retires in ${retirement} years` : "is already retired."
    }`
  );
};
yearUntilRetirement({ year: 1987, firstName: "John" });
