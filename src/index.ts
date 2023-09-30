console.log ("Hello TS");

/** declare a number (int/float/double) */
let num1: number = 1;
let float1: number = 0.005;
let double1: number = 1234.67883;
let underscoredNumber: number = 123_456_789;

/** declare strings */
let aVeryLongString: string = "A very long string";

/** declare boolean values */
let isThisTrue: boolean = false;

/** declaring arrays of specific type */
let aListOfNumbers: number[] = [
    1, 2, 3, 4, 0.5, 6, 12.3
];

/** declaring empty arrays with annotation */
let fillMeUp: number[] = [];

/** declaring tuples (i don't see a use case for this) */
let iAmATuple: [number, string] = [0.05, "Population Growth"];

/** declaring enums (might be handy) */
    // declares the enum.
    // by declaring zero on the first element, the compiler will automatically
    // increment the values of the succeeding elements. 
    enum shirtSizes { small = 0, medium, large };
    let myShirtSize = shirtSizes.medium; // how to reference the enum and its members

    // below is an example of an enum with strings.
    // SETTING AN ENUM ELEMENT TO A STRING COMPELS US TO INITIALIZE
    // EVERY ENUM MEMBER. Surprisingly, errors are emitted when mixing boolean values
    enum withString { defaultText = "Default", fontSize = 12, defaultColor = "black"};
    let def = withString.defaultText;

/** declaring and usage of functions 
 * syntax:
 * function [Name] ([arg: type], [...]): [return_type] {
 *  ... body ...
 * }
*/
function calculateTax (grossIncome: number, taxBracket: number, taxationYear: number): number {

    if (taxationYear === 2020) {
        // hypothetically remove all taxations 
        // for this year, sanaol.
        return grossIncome;
    } else {
        if (taxBracket > 5) {
            return grossIncome * 1.15;
        } else {
            return grossIncome * 1.20;
        }
    }

}

console.log (calculateTax (10000, 4, 2019));


/** declaring objects 
 * the 'readonly' keyword in employee.id declares 
 * the property to be a constant and cannot be changed
*/
let employee: {
    readonly id: number,
    name: string,
    retirementAge: (date: Date) => number
 } = {
    id: 123,
    name: "Marvin",
    retirementAge: (date: Date) => {
        return date.getFullYear() + 30;
    },
 }

/** declaring obects part 2: type aliasing (like C Structs) 
 * syntax: 
 * type [TypeName] = {
 *  ... properties ...
 * }
*/
type Employee = {
    readonly id: number,
    name: string,
    retirementAge: (date: Date) => number
};

const underpaidEmployee: Employee = {
    id: 3,
    name: "Bob Stone",
    retirementAge: (date: Date) => {
        return date.getFullYear() + 30;       
    },
}


/** union types (you can assign numbers OR others into A SINGLE variable, which defeats the purpose of having TS hahahahaha) 
 * syntax:
 *      [variableName]: [type1] | [type2] | [...]
 * 
 * can be used in function params too
*/
let whatAmI: number | string | boolean = "10";
whatAmI = 1.4;
whatAmI = false;


/** type intersection
 * (more like polymorphism of objects in OOP)
 */

type CanDrag = {
    isEnabled: boolean,
    isVisible?: boolean
};

type CanResize = {
    resize: (width: number, height: number) => void
}

type CanBothDragAndResize = CanDrag & CanResize; // syntax

// if a variable with an intersected type is set,
// all member properties must be initialized, unless
// explicitly set as optional by using '?' after the property name
// notice that the 'CanDrag.isVisible' property is not
// initialized when declaring UIComponent
let UIComponent: CanBothDragAndResize = {
    isEnabled: true,
    resize: (width: number, height: number) => {
        console.log (width);
        console.log (height);
    }
}



/** literal types (using actual values as types) 
 * 
 * in the below example, the variable 'pickOneValue' can only be set
 * to either 50 or 100
*/
let pickOneValue: 50 | 100 = 100;