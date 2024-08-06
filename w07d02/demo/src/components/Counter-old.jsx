import { useState } from 'react';

// let count = 100;

const Counter = () => {
  console.log('Counter component render');

  // argument to useState is the initial value for state
  // const stateArr = useState(100);
  // const count = stateArr[0];
  // const setCount = stateArr[1];

  const [count, setCount] = useState(0);

  const increment = () => {
    const newCount = count + 1;

    setCount(newCount) // 1
    console.log('count inside increment', newCount); // 0 or 1
  };

  return (
    <div>
      <h2>Count is: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
