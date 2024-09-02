import "./App.css";
import CountContext from "./contexts/CountContext";
import UserContext from "./contexts/UserContext";
import {useState} from 'react';

import InBetween from "./components/InBetween";

// import Button from "./components/Button";
// import Display from "./components/Display";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const value = { count, increment };

  return (
    <CountContext.Provider value={value}>
      <UserContext.Provider value={{}}>
        <div className="App">
          <InBetween />
        </div>
      </UserContext.Provider>
    </CountContext.Provider>
  );
};

export default App;
