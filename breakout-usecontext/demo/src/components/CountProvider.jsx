import {createContext, useState, useContext} from 'react';

const CountContext = createContext();

export const useCountContext = () => {
  return useContext(CountContext);
};

const CountProvider = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <CountContext.Provider value={{ count, increment }}>
      {props.children}
    </CountContext.Provider>
  );
};

export default CountProvider;
