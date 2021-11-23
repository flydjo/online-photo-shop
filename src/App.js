import React from "react"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import {Routes, Route} from "react-router-dom"
import './App.css';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<h1>HOME PAGE</h1>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </div>
  );
}

export default App;
