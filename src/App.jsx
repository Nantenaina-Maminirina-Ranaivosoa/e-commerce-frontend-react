import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        <Products />
      </main>
    </div>
  );
}

export default App;
