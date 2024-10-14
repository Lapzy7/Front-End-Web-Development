import { yearUntilRetirement } from "./calculateage.js";
import { addNumber, printSum } from "./addnumber.js";
import { calculateArea } from "./calculatearea.js";
import { makeAjaxRequest } from "./ajaxrequest.js";

// 1. Let & Const
yearUntilRetirement({ year: 1987, firstName: "John" });

// 2. String Literal
const sum = addNumber(1, 2, 3, 4, 5, 6, 7);
printSum(sum);

// 3. Arrow Function
let radius = 21;
const area21 = calculateArea({ radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius, power: 2 });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4. Default Parameter
makeAjaxRequest("www.google.com");
