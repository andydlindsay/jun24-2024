import './App.css';
// import Header from './components/Header';
// import Button from './components/Button';
import Counter from './components/Counter';

const App = () => {
  return (
    <div className="App">
      <h2>React State</h2>
      {/* <Header username="alice" age={42} /> */}
      {/* { Header({ username: "bob", age: 100 }) } */}

      {/* <Button>Copy Username</Button> */}

      <Counter />
    </div>
  );
};

export default App;
