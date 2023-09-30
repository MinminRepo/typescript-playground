"use strict";
console.log("Hello TS");
let num1 = 1;
let float1 = 0.005;
let double1 = 1234.67883;
let underscoredNumber = 123456789;
let aVeryLongString = "A very long string";
let isThisTrue = false;
let aListOfNumbers = [
    1, 2, 3, 4, 0.5, 6, 12.3
];
let fillMeUp = [];
let iAmATuple = [0.05, "Population Growth"];
var shirtSizes;
(function (shirtSizes) {
    shirtSizes[shirtSizes["small"] = 0] = "small";
    shirtSizes[shirtSizes["medium"] = 1] = "medium";
    shirtSizes[shirtSizes["large"] = 2] = "large";
})(shirtSizes || (shirtSizes = {}));
;
let myShirtSize = shirtSizes.medium;
var withString;
(function (withString) {
    withString["defaultText"] = "Default";
    withString[withString["fontSize"] = 12] = "fontSize";
    withString["defaultColor"] = "black";
})(withString || (withString = {}));
;
let def = withString.defaultText;
function calculateTax(grossIncome, taxBracket, taxationYear) {
    if (taxationYear === 2020) {
        return grossIncome;
    }
    else {
        if (taxBracket > 5) {
            return grossIncome * 1.15;
        }
        else {
            return grossIncome * 1.20;
        }
    }
}
console.log(calculateTax(10000, 4, 2019));
let employee = {
    id: 123,
    name: "Marvin",
    retirementAge: (date) => {
        return date.getFullYear() + 30;
    },
};
const underpaidEmployee = {
    id: 3,
    name: "Bob Stone",
    retirementAge: (date) => {
        return date.getFullYear() + 30;
    },
};
let whatAmI = "10";
whatAmI = 1.4;
whatAmI = false;
//# sourceMappingURL=index.js.map