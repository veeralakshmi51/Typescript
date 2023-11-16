"use strict";
//Typescript - Generics
const toArray = (x, y, z) => {
    return [x, y, z];
};
let array = toArray('1', 2, 3);
console.log(array);
const toArrayGeneric = (x, y, z) => {
    return [x, y, z];
};
let array1 = toArrayGeneric('1', '2', '3');
console.log(array);
