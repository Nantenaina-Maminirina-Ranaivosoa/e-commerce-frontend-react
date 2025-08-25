import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Products from "./components/Products/Products";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        <Products />
        <About />
      </main>
    </div>
  );
}

export default App;
