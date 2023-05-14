import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Analytics } from '@vercel/analytics/react';

import Home from './components/Home';
import Product from './components/Product';
import Fabric from './components/Fabric';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

import './App.css';

const App = () => (
  <>
  <Analytics />
  <Router>
    <Routes >
      <Route exact path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/fabric" element={<Fabric />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Routes >
  </Router>
  </>
);

export default App;
