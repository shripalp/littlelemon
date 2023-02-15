//import logo from './logo.svg';
import React from "react";
//import './App.css';
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";
import About from "./routes/About";
import Menu from "./routes/Menu";
import OrderOnline from "./routes/OrderOnline";
import Login from "./routes/Login";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orderonline" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </>

  );
}

export default App;
