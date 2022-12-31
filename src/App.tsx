import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import TicTacToe from "./components/Projects/Tictactoe";
import ShoppingList from "./components/Projects/ShoppingList";
import Cage from "./components/Projects/Cage";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./style.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="*" element={<Navigate to="/"/>} />
          <Route path="/about" element={<About />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/shoppinglist" element={<ShoppingList />} />
          <Route path="/randomcage" element={<Cage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
