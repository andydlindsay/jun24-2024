import './App.css';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Products from './components/Products';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="App">
      <h2>React Router Demo</h2>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="*" element={<h2>Four oh Four page</h2>} />   
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin" element={<h2>This is a secret page!</h2>} />
          <Route path="/products/:productId" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
