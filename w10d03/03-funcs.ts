// arguments/parameters, return value, name of the function

const sayHello = (name: string, age?: number): string => {
  return `hello there ${name}`;
};

const returnVal1 = sayHello('alice');
const returnVal2 = sayHello('alice', 42);

const returningPromise = (num: number): Promise<string> => {
  return new Promise((resolve) => {
    resolve('good day to you');
  });
};

returningPromise(42)
  .then((data) => {})
