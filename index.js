/* use the 'split()' method.
If we want to convert a String to an Array we should start with the split() method.

The 'split' method takes seperator and limit as arguments. The seperator sets the character to seperate the 'string', it sets the place where the split will happen. Limit sets the limit for how many times should 'split' be repeated
*/

let string1 = "string to array";
let array1 = string1.split("");

let string2 = "string string string";
let array2 = string2.split(" ");

let string3 = "string string string";
let array3 = string3.split(",");

let string4 = "string string string string"
let array4 = string4.split(",", 4);

let string5 = "string and string and string and string and string";
let array5 = string5.split("and", 5);

console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);
console.log(array5);