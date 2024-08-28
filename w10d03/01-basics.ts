let username: string | number | boolean = 'alice';

username = 'bob';
username = 42;
username = false;

const numbers: (number | string)[] = [];

numbers.push(42);
numbers.push('hello');
// numbers.push([]);

const poppedValue = numbers.pop();
