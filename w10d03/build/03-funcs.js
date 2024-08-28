"use strict";
// arguments/parameters, return value, name of the function
const sayHello = (name, age) => {
    return `hello there ${name}`;
};
const returnVal1 = sayHello('alice');
const returnVal2 = sayHello('alice', 42);
const returningPromise = (num) => {
    return new Promise((resolve) => {
        resolve('good day to you');
    });
};
returningPromise(42)
    .then((data) => { });
