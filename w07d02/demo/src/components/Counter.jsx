import { useState } from 'react';
import Display from './Display';
import Button from './Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  return (
    <div>
      <Display count={count} />
      <Button onClick={increment}>Increment+</Button>
    </div>
  );
};

export default Counter;
