import "./App.css";
import CountProvider from "./components/CountProvider";
import InBetween from "./components/InBetween";

const App = () => {
  return (
    <CountProvider>
      <div className="App">
        <InBetween />
      </div>
    </CountProvider>
  );
};

export default App;
