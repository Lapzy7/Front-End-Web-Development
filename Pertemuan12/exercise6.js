// Ubahlah syntax ES5 berikut ke dalam ES6

// 1 Let & Const
const calculateAge = function (birthYear) {
  return 2019 - birthYear;
};

const yearUntilRetirement = function (object) {
  let age = calculateAge(object.year);
  let retirement = 60 - age;

  if (retirement > 0) {
    console.log(object.firstName + " retires in " + retirement + " years");
  } else {
    console.log(object.firstName + " is already retired.");
  }
};

yearUntilRetirement({ year: 1987, firstName: "John" });

// 2. String Literal
function addNumber(a, b, c, d, e, f, g) {
  const numbers = [a, b, c, d, e, f, g];
  let sum = 0;
  numbers.forEach(function (num) {
    sum += num;
  });
  return sum;
}

console.log(`The sum of the numbers is: ${addNumber(1, 2, 3, 4, 5, 6, 7)}`);

// 3. Arrow Function

const phi = 3.14;
const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

let radius = 21;
const area21 = calculateArea({ radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius, power: 2 });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4. Default Parameter
const makeAjaxRequest = (url, method = "GET") => {
  console.log(url, method);
};

makeAjaxRequest("www.google.com");
