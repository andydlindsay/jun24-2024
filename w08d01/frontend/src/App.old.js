import './App.css';
import {useEffect, useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState('');
  
  useEffect(() => { // just like document.ready
    document.title = `the count is ${count}`;
    console.log('setting the document title');
  }, [count]);

  return (
    <div className="App">
      <h2>Welcome to our site!</h2>

      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <div>
        <label>Username:</label>
        {/* controlled input */}
        <input 
          value={username}
          onChange={(event) => { setUsername(event.target.value) }}
        />
      </div>
    </div>
  );
};

export default App;
