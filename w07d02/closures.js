// class-based components and function components
// class Counter {
//   constructor() {
//     this.count = 0;
//   }

//   increment() {
//     this.count += 1;
//     console.log(this.count);
//   }
// }

// const counter = new Counter();
// // console.log(counter);

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

let count = 0; // 1
let username = 'alice';

const another = () => {
  console.log(count);
  count = 42;
};

const increment = () => {
  count += 1;
  console.log(count);
};

increment();
increment();
increment();
increment();
increment();

const hof = () => {
  let count = 0;

  return () => {
    count += 1;
    console.log(count);
  };
};
